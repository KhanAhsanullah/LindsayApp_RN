import React from "react";
import { StyleSheet, Image, ImageBackground, FlatList } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { theme } from "../../../constants";
import HorizentalItem from "../../atoms/ExerciseAtoms/HorizentalItem";
import VerticalItem from "../../atoms/ExerciseAtoms/VerticalItem";

const ExerciseMol = (props: any) => {
  return (
    <View marginV-20>
      <HorizentalItem />
      <VerticalItem />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ExerciseMol;
