import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, SCREEN_WIDTH, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "../Typography";

const HeaderHome = (props: any) => {
  const { color = theme.color.primary, headerBkColor = theme.color.white } =
    props;
  return (
    <View backgroundColor={headerBkColor}>
      <Image
        source={IMAGES.homeHeaderImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <Image
        source={IMAGES.logo}
        style={{
          width: 35,
          height: 55,
          alignSelf: "center",
          marginTop: -35,
          tintColor: color,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH,
    height: verticalScale(45),
    // marginTop: -25,
  },
});

export default HeaderHome;
