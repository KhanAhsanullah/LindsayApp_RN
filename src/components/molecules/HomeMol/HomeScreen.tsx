import React from "react";
import { StyleSheet } from "react-native";
import HeaderHome from "../../atoms/HomeAtoms/HeaderHome";
import HealthCoaching from "../../atoms/HomeAtoms/HealthCoaching";
import Fitness from "../../atoms/HomeAtoms/Fitness";
import Nutrition from "../../atoms/HomeAtoms/Nutrition";
import { theme } from "../../../constants";

const HomeScreen = () => {
  return (
    <>
      <HeaderHome color={theme.color.white} headerBkColor={theme.color.black}/>
      <HealthCoaching />
      <Fitness />
      <Nutrition />
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
