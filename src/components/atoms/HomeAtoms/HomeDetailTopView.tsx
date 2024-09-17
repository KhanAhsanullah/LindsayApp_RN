import React, { useState } from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { onBack } from "../../../navigation/RootNavigation";

const HomeDetailTopView = (props: any) => {
  return (
      <ImageBackground
        source={IMAGES.onBoardingImg}
        style={{ width: verticalScale(320), height: scale(350) }}
        resizeMode="cover"
      >
        <TouchableOpacity onPress={()=>onBack()}>
        <Image source={IMAGES.leftIconWithColor} style={{width:30,height:30,margin:20}}/>
        </TouchableOpacity>
      </ImageBackground>
  );
};
export default HomeDetailTopView;
