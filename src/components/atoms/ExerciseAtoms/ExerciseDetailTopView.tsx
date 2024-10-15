import React, { useState } from "react";
import { Image, Platform } from "react-native";
import { View } from "react-native-ui-lib";
import { IMAGES, SCREEN_HEIGHT, SCREEN_WIDTH, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";

const ExerciseDetailTopView = (props: any) => {
  const { onPress } = props;
  return (
    <View style={{}}>
      <Image
        source={IMAGES.yogaImg}
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT*0.5,
        }}
        resizeMode="cover"
      />
    </View>
  );
};
export default ExerciseDetailTopView;
