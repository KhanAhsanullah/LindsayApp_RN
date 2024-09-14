import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "../Typography";

const HealthCoaching = () => {
  return (
    <ImageBackground
      source={IMAGES.healthCoach}
      style={{
        width: verticalScale(320),
        height: scale(320),
      }}
      resizeMode="cover"
    >
     
      <View style={{ position: "absolute", bottom: 50, alignSelf: "center" }}>
        <Typography
          color={theme.color.white}
          align="center"
          textType="semibold"
          size={theme.fontSize.extraLarge}
        >
          Health Coaching
        </Typography>
        <Typography color={theme.color.white} size={theme.fontSize.small}>
          What is Board Certified Health Coaching
        </Typography>
      </View>
    </ImageBackground>
  );
};
export default HealthCoaching;
