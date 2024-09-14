import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "../Typography";

const HeaderHome = () => {
  return (
    <View flex>
      <Image
        source={IMAGES.homeHeaderImg}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: verticalScale(320),
    height: scale(100),
    marginTop: -25,
  },
});

export default HeaderHome;
