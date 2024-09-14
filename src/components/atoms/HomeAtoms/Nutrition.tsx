import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "../Typography";

const Nutrition = () => {
  return (
    <ImageBackground
    source={IMAGES.healthCoach}
        style={{
          width: verticalScale(320),
          height: scale(320),
        }}
        resizeMode="cover"
    >
     
      <View flex   style={{ justifyContent:"center", alignSelf: "center" }}>
        <Typography
          color={theme.color.white}
          align="center"
          textType="semibold"
          size={theme.fontSize.extraLarge}
        >
          Nutrition
        </Typography>
        <Typography color={theme.color.white} size={theme.fontSize.small}>
          What is Nutrition Coachng ? 
        </Typography>
      </View>
    </ImageBackground>
  );
};
export default Nutrition;
