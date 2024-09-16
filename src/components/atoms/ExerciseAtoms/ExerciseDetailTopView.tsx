import React, { useState } from "react";
import {  Image } from "react-native";
import { View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";

const ExerciseDetailTopView = (props: any) => {
  const { onPress } = props;
  return (
    <View style={{}}>
      <Image
        source={IMAGES.yogaImg}
        style={{ width: verticalScale(320), height: scale(350) }}
        resizeMode="cover"
      />
    </View>
  );
};
export default ExerciseDetailTopView;
