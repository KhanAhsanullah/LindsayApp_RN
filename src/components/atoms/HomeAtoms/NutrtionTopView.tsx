import React, { useState } from "react";
import { TouchableOpacity, Image, ImageBackground, Platform } from "react-native";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { onBack } from "../../../navigation/RootNavigation";
import { View } from "react-native-ui-lib";

const NutrtionTopView = (props: any) => {
  return (
    <View style={{ top: -50 }}>
      <ImageBackground
        source={IMAGES.nutritionHeader}
        style={{  width: Platform.OS == 'ios' ? verticalScale(320) : verticalScale(350), height: scale(350) }}
        resizeMode="contain"
      >
        <TouchableOpacity onPress={() => onBack()}>
          <Image
            source={IMAGES.leftIconWithColor}
            style={{
              width: 30,
              height: 30,
              marginTop: 80,
              marginHorizontal: 20,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
          <Image
            source={IMAGES.dishes}
            style={{
              width: verticalScale(200),
              height: scale(200),
              marginTop: 40,
              alignSelf: "center",
            }}
            resizeMode="contain"
          />
      </ImageBackground>
    </View>
  );
};
export default NutrtionTopView;
