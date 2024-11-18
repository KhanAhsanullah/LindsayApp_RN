import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, TouchableOpacity, ViewBase } from "react-native";
import { ToastPresets, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import ChangePassData from "../../components/molecules/ChangePassMOI/ChangePassData";
import { Calendar } from "react-native-calendars";
import { useDispatch } from "react-redux";
import { MainActions } from "../../redux/actions/MainActions";
import { showHideToast } from "../../redux/slices/OtherSlice";
import { FlatList } from "react-native-gesture-handler";
import { SCREEN_WIDTH } from "../../utils/Constants";
import { Typography } from "../../components/atoms/Typography";

const Booking = () => {

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedBookDate, setSelectedBookDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [slots, setSlots] = useState([]);
    const dispatch = useDispatch();

    const GetBookings = async (date) => {
        await dispatch(MainActions.GetAllAvailableDates({ date })).then((v) => {
            let status = v.meta.requestStatus;
            if (status == "fulfilled") {
                setSlots(v?.payload)
                // dispatch(showHideToast({
                //     visible: true,
                //     message: "Slot has been booked successfully",
                //     preset: ToastPresets.SUCCESS
                // }))

            }
        })
        setLoading(false)
    }
    const Book = async () => {
        await dispatch(MainActions.BookSlot({ booking_id: selectedBookDate })).then((v) => {
            let status = v.meta.requestStatus;
            if (status == "fulfilled") {
                dispatch(showHideToast({
                    visible: true,
                    message: "Slot has been booked successfully",
                    preset: ToastPresets.SUCCESS
                }))

            }
        })
        setLoading(false)
    }

    useEffect(() => {
        if (selectedBookDate) {
            Alert.alert("Book this date", `Do you want to book this slot on ${selectedDate}?`, [
                {
                    text: "Yes, Book",
                    onPress: () => {
                        Book()
                    }
                },
                {
                    text: "No",
                    onPress: () => {
                        setSelectedBookDate(null)
                    }
                }
            ])
        }
    }, [selectedBookDate])

    return (
        <SafeAreaContainer safeArea={false}>
            <HeaderHome color={theme.color.primary} />
            <Calendar
                markedDates={{
                    [selectedDate]: { selected: true, selectedColor: theme.color.primary },
                }}
                onDayPress={day => {
                    setLoading(true)
                    GetBookings(day.dateString)
                    setSelectedDate(day?.dateString)
                }}
            />
            <FlatList
                style={{ marginTop: 20 }}
                data={slots}
                numColumns={3}
                contentContainerStyle={{ gap: 10 }}
                columnWrapperStyle={{ gap: 10, justifyContent: "center" }}
                renderItem={({ item, index }) => {
                    let booked = item?.status != "available";
                    return (
                        <TouchableOpacity
                            disabled={booked}
                            onPress={() => {
                                setSelectedBookDate(item?.id)
                            }}>
                            <View
                                center
                                padding-15
                                backgroundColor={item?.id == selectedBookDate ? theme.color.primarybeta : "#fff"}
                                br20
                                width={SCREEN_WIDTH * 0.3}
                                style={{ opacity: booked ? 0.7 : 1 }}>
                                <Typography textType="semiBold" color={item?.id == selectedBookDate ? "#fff" : "#000"}>
                                    {item?.start_time}
                                </Typography>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                ListFooterComponent={loading && <ActivityIndicator size={"large"} color={theme.color.primary} />}
            />
        </SafeAreaContainer>
    );
};

const styles = StyleSheet.create({});

export default Booking;
