import React from "react";
import { StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "../Typography";
import { navigate } from "../../../navigation/RootNavigation";

const Fitness = () => {
  return (
    <ImageBackground
      source={IMAGES.homeMiddleImg}
      style={{
        width: verticalScale(320),
        height: scale(320),
      }}
      resizeMode="cover"
    >
     <View flex center>
     <TouchableOpacity onPress={()=>navigate(SCREENS.FITNESS_DETAIL)}>
        <Typography
          color={theme.color.white}
          align="center"
          textType="semiBold"
          size={theme.fontSize.extraLarge}
        >
          Fitness
        </Typography>
        <Typography color={theme.color.white} size={theme.fontSize.small}>
          Why Choose on Elite Personal Trainer ?
        </Typography>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default Fitness;
