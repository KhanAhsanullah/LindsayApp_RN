import React from "react";
import { View, StyleSheet, Image } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, theme } from "../../constants";
import LinearGradient from "react-native-linear-gradient";
import { OnBeardingContent } from "../molecules/OnBeardingContent";
import { OnBeardingTopCont } from "../atoms/OnBoardingAtoms/OnBeardingTopCont";
import Animated, { SlideInUp } from "react-native-reanimated";

const OnBoardingTamplet = () => {
  return (
    // <SafeAreaContainer safeArea={false}>
    <LinearGradient
      style={{ flex: 1 }}
      colors={[theme.color.primary, theme.color.cyan]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      <Animated.View style={{ flex: 1 }} entering={SlideInUp}>
        <OnBeardingTopCont />
      </Animated.View>
      <OnBeardingContent />
    </LinearGradient>
    // </SafeAreaContainer>
  );
};

export default OnBoardingTamplet;
