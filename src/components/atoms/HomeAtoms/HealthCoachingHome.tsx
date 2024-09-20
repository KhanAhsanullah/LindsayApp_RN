import React from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "../Typography";
import { navigate } from "../../../navigation/RootNavigation";

const HealthCoachingHome = () => {
  return (
    <ImageBackground
      source={IMAGES.healthCoach}
      style={{
        width: Platform.OS == 'ios' ? verticalScale(320) : verticalScale(350),
        height: scale(320),
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
        <Typography color={theme.color.white} size={theme.fontSize.small}>
          What is Board Certified Health Coaching
        </Typography>
      </View>
    </ImageBackground>
  );
};
export default HealthCoachingHome;
