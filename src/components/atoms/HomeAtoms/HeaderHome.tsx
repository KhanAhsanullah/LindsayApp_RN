import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import { Typography } from "../Typography";

const HeaderHome = () => {
  return (
    <View flex backgroundColor={theme.color.primarybeta}> 
      <Image
        source={IMAGES.homeHeaderImg}
        style={styles.image}
        resizeMode="contain"
      />
       <Image
        source={IMAGES.logo}
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={IMAGES.healthCoach}
        style={{
            width: verticalScale(320),
            height: scale(320),
        }}
        resizeMode='cover'
      />

    
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: verticalScale(320),
    height: scale(80),
  },
});

export default HeaderHome;
