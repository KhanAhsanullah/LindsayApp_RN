import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";
import { scale, verticalScale } from "react-native-size-matters";

const HomeDetailTopView = (props: any) => {
  return (
    <View style={{}}>
      <Image
        source={IMAGES.healthCoach}
        style={{ width: verticalScale(320), height: scale(350) }}
        resizeMode="cover"
      />
    </View>
  );
};
export default HomeDetailTopView;
