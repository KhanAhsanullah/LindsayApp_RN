import React from "react";
import { View, StyleSheet, Image } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, theme } from "../../constants";
import LinearGradient from "react-native-linear-gradient";
import { OnBeardingContent } from "../molecules/OnBeardingContent";
import { OnBeardingTopCont } from "../atoms/OnBoardingAtoms/OnBeardingTopCont";

const OnBoardingTamplet = () => {
  return (
    // <SafeAreaContainer safeArea={false}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={[theme.color.primary, theme.color.cyan]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <OnBeardingTopCont />
        <OnBeardingContent />
      </LinearGradient>
    // </SafeAreaContainer>
  );
};

export default OnBoardingTamplet;
