import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";

const ProfileList = (props: any) => {
  const { onPress } = props;
  const DATA = [
    {
      id: 1,
      title: "Edit Profile",
      image: IMAGES.pr1,
    },
    {
      id: 2,
      title: "Notifications",
      image: IMAGES.pr2,
    },
    {
      id: 3,
      title: "Subscription",
      image: IMAGES.pr3,
    },
    {
      id: 4,
      title: "Order Placed",
      image: IMAGES.pr4,
     
    },
    {
      id: 5,
      title: "Delete Account",
      image: IMAGES.pr5,
    },
    {
      id: 6,
      title: "Logout",
      image: IMAGES.pr6,
    },
  ];
  const _renderItem = ({ item }: any) => {
    return (
      <>
        <TouchableOpacity onPress={onPress}>
          <View row marginV-20>
            <Image
              source={item.image}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
            <View marginL-20 flex>
          <View row spread>
              <Typography  size={theme.fontSize.medium}>
                {item.title}
              </Typography>
            <Image source={IMAGES.rightIcon} style={{width:15,height:15}} />
              </View>
            </View>
          </View>
          <View style={commonStyles.lineBar} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={_renderItem}
      keyExtractor={(item: any) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default ProfileList;
