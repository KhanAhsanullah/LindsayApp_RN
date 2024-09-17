import React from "react";
import { StyleSheet } from "react-native";
import HeaderHome from "../../atoms/HomeAtoms/HeaderHome";
import Fitness from "../../atoms/HomeAtoms/Fitness";
import Nutrition from "../../atoms/HomeAtoms/Nutrition";
import { theme } from "../../../constants";
import HealthCoachingHome from "../../atoms/HomeAtoms/HealthCoachingHome";

const HomeScreen = () => {
  return (
    <>
      <HeaderHome color={theme.color.white} headerBkColor={theme.color.black}/>
      <HealthCoachingHome />
      <Fitness />
      <Nutrition />
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
