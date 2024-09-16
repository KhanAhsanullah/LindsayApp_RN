import React from "react";
import { StyleSheet, Image, ImageBackground, FlatList } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { SCREENS, theme } from "../../../constants";
import HorizentalItem from "../../atoms/ExerciseAtoms/HorizentalItem";
import VerticalItem from "../../atoms/ExerciseAtoms/VerticalItem";
import { navigate } from "../../../navigation/RootNavigation";

const ExerciseMol = (props: any) => {
  return (
    <View marginV-20>
      <HorizentalItem />
      <VerticalItem onPress={() => navigate(SCREENS.EXERCISE_DETAIL)} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ExerciseMol;
