import React from "react";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import ExerciseMol from "../../components/molecules/ExerciseMol";
import { Image, TouchableOpacity } from "react-native";
import { onBack } from "../../navigation/RootNavigation";
import { commonStyles } from "../../globalStyle";
import { Typography } from "../../components/atoms/Typography";
import ProgreeBar from "../../components/atoms/WorkoutAtoms/ProgressBar";
import WorkOutTamplet from "../../components/templates/WorkOutTamplet";

const Workout = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <WorkOutTamplet />
    </SafeAreaContainer>
  );
};

export default Workout;
