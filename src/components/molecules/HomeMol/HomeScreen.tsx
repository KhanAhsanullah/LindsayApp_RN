import React from "react";
import { StyleSheet } from "react-native";
import HeaderHome from "../../atoms/HomeAtoms/HeaderHome";
import Fitness from "../../atoms/HomeAtoms/Fitness";
import Nutrition from "../../atoms/HomeAtoms/Nutrition";
import { theme } from "../../../constants";
import HealthCoachingHome from "../../atoms/HomeAtoms/HealthCoachingHome";
import { View } from "react-native-ui-lib";

const HomeScreen = () => {
  return (
    <>
      <HeaderHome color={theme.color.white} headerBkColor={"rgba(0,0,0,0.9)"} />
      <HealthCoachingHome />
      <Nutrition />
      <View absH style={{ top: "32%", left: 0, right: 0 }}>
        <Fitness />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
