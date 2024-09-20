import React, { useState } from "react";
import { Image, Platform } from "react-native";
import { View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";

const ExerciseDetailTopView = (props: any) => {
  const { onPress } = props;
  return (
    <View style={{}}>
      <Image
        source={IMAGES.yogaImg}
        style={{
          width: Platform.OS == "ios" ? verticalScale(320) : verticalScale(350),
          height: scale(350),
        }}
        resizeMode="cover"
      />
    </View>
  );
};
export default ExerciseDetailTopView;
