import React from "react";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import ExerciseMol from "../../components/molecules/ExerciseMol";
import ExerciseDetailMol from "../../components/molecules/ExerciseMol/ExerciseDetailMol";

const ExerciseDetail = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <ExerciseDetailMol />
    </SafeAreaContainer>
  );
};

export default ExerciseDetail;
