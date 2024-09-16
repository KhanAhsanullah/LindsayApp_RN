import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";

const ProfileImg = (props: any) => {
  const { onPress } = props;
  return (
    <View center marginV-10> 
    <Image
      source={IMAGES.profileImg}
      style={{ width: 110, height: 100 }}
      resizeMode="contain"
    />
    </View>
  );
};
export default ProfileImg;
