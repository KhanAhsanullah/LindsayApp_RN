import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Image, ToastPresets, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import ChangePassData from "../../components/molecules/ChangePassMOI/ChangePassData";
import { Calendar } from "react-native-calendars";
import { useDispatch, useSelector } from "react-redux";
import { MainActions } from "../../redux/actions/MainActions";
import { showHideToast } from "../../redux/slices/OtherSlice";
import { FlatList } from "react-native-gesture-handler";
import { SCREEN_WIDTH } from "../../utils/Constants";
import { Typography } from "../../components/atoms/Typography";
import { States } from "../../utils/types";
import { onBack } from "../../navigation/RootNavigation";
import { CustomBtn } from "../../components/atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { commonStyles } from "../../globalStyle";

interface BookingSlot {
  id: string | number;
  start_time: string;
  end_time?: string;
  status: string;
  booking_details?: any;
  category?: string;
}

interface BookingDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
  bookingData: {
    date: string;
    time: string;
    category: string;
    userName: string;
    email: string;
  };
}

const BookingDetailsModal: React.FC<BookingDetailsModalProps> = ({
  visible,
  onClose,
  onConfirm,
  loading,
  bookingData,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={commonStyles.centerView}>
        <View style={[commonStyles.modalStyle, { backgroundColor: theme.color.white, width: "85%" }]}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            disabled={loading}
          >
            <Image
              source={IMAGES.cross}
              style={styles.closeIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          
          <View center marginB-20>
            <Typography textType="semiBold" size={theme.fontSize.large20} color={theme.color.primary}>
              Booking Details
            </Typography>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <Image
                  source={IMAGES.healthCoach}
                  style={styles.detailIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.detailContent}>
                <Typography textType="medium" size={theme.fontSize.small} color={theme.color.descColor}>
                  Category
                </Typography>
                <Typography textType="semiBold" size={theme.fontSize.medium} color={theme.color.black}>
                  {bookingData.category || "Health Coaching"}
                </Typography>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <Image
                  source={IMAGES.user}
                  style={styles.detailIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.detailContent}>
                <Typography textType="semiBold" size={theme.fontSize.medium} color={theme.color.black}>
                  {bookingData.userName}
                </Typography>
                <Typography textType="medium" size={theme.fontSize.small} color={theme.color.darkGray}>
                  {bookingData.email}
                </Typography>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <Image
                  source={IMAGES.clock}
                  style={styles.detailIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.detailContent}>
                <Typography textType="medium" size={theme.fontSize.small} color={theme.color.descColor}>
                  Date
                </Typography>
                <Typography textType="semiBold" size={theme.fontSize.medium} color={theme.color.black}>
                  {new Date(bookingData.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </Typography>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <Image
                  source={IMAGES.clock}
                  style={styles.detailIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.detailContent}>
                <Typography textType="medium" size={theme.fontSize.small} color={theme.color.descColor}>
                  Time
                </Typography>
                <Typography textType="semiBold" size={theme.fontSize.medium} color={theme.color.black}>
                  {bookingData.time}
                </Typography>
              </View>
            </View>
          </View>

          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={theme.color.primary} />
              <Typography textType="medium" size={theme.fontSize.medium} color={theme.color.descColor} style={{ marginTop: 10 }}>
                Processing your booking...
              </Typography>
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              <CustomBtn
                label="Cancel"
                backgroundColor={theme.color.divider}
                style={[styles.button, { backgroundColor: theme.color.divider }]}
                onPress={onClose}
              />
              <CustomBtn
                label="Confirm"
                backgroundColor={theme.color.primary}
                style={styles.button}
                onPress={onConfirm}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedBookDate, setSelectedBookDate] = useState<string | number | null>(null);
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState<BookingSlot[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useSelector((state: States) => state.Auth);

  const dispatch = useDispatch();

  const GetBookings = async (date: string) => {
    await dispatch(MainActions.GetAllAvailableDates({ date }) as any).then((v: any) => {
      let status = v.meta.requestStatus;
      if (status == "fulfilled") {
        setSlots(
          v?.payload?.filter(
            (f: any) => Object.entries(f?.booking_details || {})?.length == 0
          ) || []
        );
      }
    });
    setLoading(false);
  };

  const Book = async () => {
    setLoading(true);
    await dispatch(MainActions.BookSlot({ booking_id: selectedBookDate }) as any).then(
      (v: any) => {
        let status = v.meta.requestStatus;
        if (status == "fulfilled") {
          setSlots((prev) => {
            return [...prev].filter((f) => f.id != selectedBookDate);
          });
          dispatch(
            showHideToast({
              visible: true,
              message: "Slot has been booked successfully",
              preset: ToastPresets.SUCCESS,
            })
          );
          setModalVisible(false);
          setSelectedBookDate(null);
        }
      }
    );
    setLoading(false);
  };

  const handleSlotPress = (slotId: string | number) => {
    setSelectedBookDate(slotId);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedBookDate(null);
  };

  const getSelectedSlotTime = () => {
    const selectedSlot = slots.find(slot => slot.id === selectedBookDate);
    return selectedSlot?.start_time || "";
  };

  const bookingData = {
    date: selectedDate,
    time: getSelectedSlotTime(),
    category: "Health Coaching Session",
    userName: `${user?.first_name || ''} ${user?.last_name || ''}`.trim() || 'User',
    email: user?.email || 'user@example.com'
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <TouchableOpacity onPress={() => onBack()}>
        <Image
          source={IMAGES.leftIconWithColor}
          style={{
            width: 30,
            height: 30,
            marginVertical: 10,
            marginHorizontal: 20,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Calendar
        minDate={new Date().toISOString()}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: theme.color.primary,
          },
        }}
        onDayPress={(day: any) => {
          setLoading(true);
          GetBookings(day.dateString);
          setSelectedDate(day?.dateString);
        }}
      />
      <FlatList
        style={{ marginTop: 20 }}
        data={slots}
        numColumns={3}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10, justifyContent: "center" }}
        renderItem={({ item, index }: { item: BookingSlot; index: number }) => {
          let booked = item?.status != "available";
          return (
            <TouchableOpacity
              disabled={booked}
              onPress={() => {
                handleSlotPress(item?.id);
              }}
            >
              <View
                center
                padding-15
                backgroundColor={
                  item?.id == selectedBookDate
                    ? theme.color.primarybeta
                    : "#fff"
                }
                br20
                width={SCREEN_WIDTH * 0.3}
                style={{ opacity: booked ? 0.7 : 1 }}
              >
                <Typography
                  textType="semiBold"
                  color={item?.id == selectedBookDate ? "#fff" : "#000"}
                >
                  {item?.start_time}
                </Typography>
              </View>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size={"large"} color={theme.color.primary} />
          ) : null
        }
      />
      
      <BookingDetailsModal
        visible={modalVisible}
        onClose={handleModalClose}
        onConfirm={Book}
        loading={loading}
        bookingData={bookingData}
      />
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    right: 15,
    top: 15,
    zIndex: 1,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    width: 15,
    height: 15,
  },
  detailsContainer: {
    width: "100%",
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.color.inputTypeColor,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  detailIcon: {
    width: 20,
    height: 20,
  },
  detailContent: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 15,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
  },
  loadingContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default Booking;
