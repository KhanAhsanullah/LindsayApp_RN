import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "../Typography";

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
      <View flex style={{ justifyContent: "center", alignSelf: "center" }}>
        <Typography
          color={theme.color.white}
          align="center"
          textType="semibold"
          size={theme.fontSize.extraLarge}
        >
          Fitness
        </Typography>
        <Typography color={theme.color.white} size={theme.fontSize.small}>
          Why Choose on Elite Personal Trainer ?
        </Typography>
      </View>
    </ImageBackground>
  );
};
export default Fitness;
