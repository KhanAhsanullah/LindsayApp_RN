import React from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, SCREEN_WIDTH, SCREENS, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "../Typography";
import { navigate } from "../../../navigation/RootNavigation";

const HealthCoachingHome = () => {
  return (
    <ImageBackground
      source={IMAGES.healthCoach}
      style={{
        width: SCREEN_WIDTH,
        flex:1
      }}
      resizeMode="cover"
    >
      <View flex center>
        <TouchableOpacity onPress={() => navigate(SCREENS.HEALTH_COACHING)}>
          <Typography
            color={theme.color.white}
            align="center"
            textType="semiBold"
            size={theme.fontSize.extraLarge}
          >
            Health Coaching
          </Typography>
        </TouchableOpacity>
        <Typography color={theme.color.white} size={theme.fontSize.extraSmall12}>
          What is Board Certified Health Coaching
        </Typography>
      </View>
    </ImageBackground>
  );
};
export default HealthCoachingHome;
