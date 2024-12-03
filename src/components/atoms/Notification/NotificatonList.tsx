import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";
import { useDispatch } from "react-redux";
import { MainActions } from "../../../redux/actions/MainActions";

const NotificatonList = (props: any) => {
  const { onPress } = props;
  const [listing, setListing] = useState([]);
  const dispatch = useDispatch();
  const getNotificationsListing = async () => {
    try {
      await dispatch(MainActions.GetNotificationsListing()).then((v) => {
        let status = v.meta.requestStatus;
        if (status == "fulfilled") {
          setListing(v?.payload);
        }
      });
    } catch (error) {}
  };
  useEffect(() => {
    getNotificationsListing();
  }, []);

  const DATA = [
    {
      id: 1,
      title: "Congratulations",
      image: IMAGES.no1,
      time: "03:30 PM",
      subTitle: "Your house cleaning service is successfully completed.",
    },
    {
      id: 2,
      title: "Schedule",
      image: IMAGES.no2,
      time: "11:30 PM",
      subTitle: "Your painting service is scheduled on 25th March.",
    },
    {
      id: 3,
      title: "Payment Success",
      image: IMAGES.no3,
      time: "03:40 PM",
      subTitle: "Your payment process is completed.",
    },
    {
      id: 4,
      title: "Order Placed",
      image: IMAGES.no4,
      time: "01:00 PM",
      subTitle: "Your house cleaning service is placed successfully.",
    },
    {
      id: 4,
      title: "Monthly Offer",
      image: IMAGES.no5,
      time: "03:20 PM",
      subTitle: "30% off on plumbing service untill 27th March.",
    },
    {
      id: 4,
      title: "Order Canceled",
      image: IMAGES.no6,
      time: "11:30 PM",
      subTitle: "Your repairing order is canceled.",
    },
  ];
  const _renderItem = ({ item }: any) => {
    return (
      <>
        <TouchableOpacity onPress={onPress}>
          <View row marginV-20>
            <Image
              source={IMAGES.no1}
              style={{ width: 65, height: 40 }}
              resizeMode="contain"
            />
            <View marginL-20 flex>
              <View row spread>
                <Typography
                  style={{ textTransform: "capitalize" }}
                  size={theme.fontSize.medium}
                  textType={"semiBold"}
                >
                  {item.title}
                </Typography>
                <Typography
                  color={theme.color.descColor}
                  size={theme.fontSize.medium}
                >
                  {item.created_date}
                </Typography>
              </View>
              <Typography
                style={{ width: "70%", textTransform: "capitalize" }}
                color={theme.color.descColor}
                size={theme.fontSize.extraSmall12}
              >
                {item.message}
              </Typography>
            </View>
          </View>
          <View style={commonStyles.lineBar} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <FlatList
      data={listing}
      renderItem={_renderItem}
      keyExtractor={(item: any) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default NotificatonList;
