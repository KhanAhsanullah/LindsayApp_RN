import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import { IMAGES, SCREEN_HEIGHT, SCREEN_WIDTH, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { onBack } from "../../../navigation/RootNavigation";

const HomeDetailTopView = (props: any) => {
  return (
    <ImageBackground
      source={IMAGES.onBoardingImg}
      style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT*0.5 }}
      resizeMode="cover"
    >
      <TouchableOpacity onPress={() => onBack()}>
        <Image
          source={IMAGES.leftIconWithColor}
          style={{ width: 30, height: 30, margin: 20 }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default HomeDetailTopView;
