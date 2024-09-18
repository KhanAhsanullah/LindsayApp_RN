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

      <View marginH-40 style={{ marginTop: -60, }}>
        <Typography
          align="center"
          size={theme.fontSize.extraLarge}
          textType="semiBold"
          color={theme.color.primary}
        >
          Sign In
        </Typography>
        <Typography
          align="center"
          style={{marginVertical:20}}
          size={theme.fontSize.small}
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
