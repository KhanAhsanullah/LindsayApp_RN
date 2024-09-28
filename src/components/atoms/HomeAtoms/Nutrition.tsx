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

const Nutrition = () => {
  return (
    <ImageBackground
      source={IMAGES.Nutrition}
      style={{
        width: SCREEN_WIDTH,
        flex: 1,
      }}
      resizeMode="cover"
    >
      <View flex centerH style={{ paddingTop: "50%" }}>
        <TouchableOpacity onPress={() => navigate(SCREENS.NUTRITION_DETAIL)}>
          <Typography
            color={theme.color.white}
            align="center"
            textType="semiBold"
            size={theme.fontSize.extraLarge}
          >
            Nutrition
          </Typography>
          <Typography
            color={theme.color.white}
            size={theme.fontSize.extraSmall12}
          >
            What is Nutrition Coachng?
          </Typography>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default Nutrition;
