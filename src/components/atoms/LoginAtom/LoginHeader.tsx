import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "../Typography";

const LoginHeader = () => {
  return (
    <>
      <Image
        source={IMAGES.loginImg}
        style={styles.image}
        resizeMode="contain"
      />

      <View marginH-20 style={{ marginTop: -80 }}>
        <Typography
          align="center"
          size={theme.fontSize.extraLarge}
          textType="semibold"
          color={theme.color.primary}
        >
          Sign In
        </Typography>
        <Typography
          align="center"
          size={theme.fontSize.small}
          textType="semibold"
          color={theme.color.descColor}
        >
          As a Nationally Board Certified Health and Wellness Coach, Elite
          Personal Trainer, In
        </Typography>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: -20,
    width: verticalScale(320),
    height: scale(320),
  },
});

export default LoginHeader;
