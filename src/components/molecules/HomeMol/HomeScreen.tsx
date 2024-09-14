import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";
import HeaderHome from "../../atoms/HomeAtoms/HeaderHome";
import { Typography } from "../../atoms/Typography";
import HealthCoaching from "../../atoms/HomeAtoms/HealthCoaching";
import Fitness from "../../atoms/HomeAtoms/Fitness";
import Nutrition from "../../atoms/HomeAtoms/Nutrition";

const HomeScreen = () => {
  return (
    <>
      <HeaderHome />
      <HealthCoaching />
      <Fitness />
      <Nutrition />
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
