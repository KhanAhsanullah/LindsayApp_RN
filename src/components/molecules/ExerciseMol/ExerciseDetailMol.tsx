import React from "react";
import { View } from "react-native-ui-lib";
import ExerciseDetailTopView from "../../atoms/ExerciseAtoms/ExerciseDetailTopView";
import ExerciseDetailBottomView from "../../atoms/ExerciseAtoms/ExerciseDetailBottomView";
import VerticalItem from "../../atoms/ExerciseAtoms/VerticalItem";
import ExerciseDetailBottomContent from "../../atoms/ExerciseAtoms/ExerciseDetailBottomContent";
import { Typography } from "../../atoms/Typography";
import { commonStyles } from "../../../globalStyle";

const ExerciseDetailMol = () => {
  return (
    <>
      <ExerciseDetailTopView />
      <View style={[commonStyles.footerContainer, { marginTop: -30 }]}>
        <ExerciseDetailBottomView />
        <ExerciseDetailBottomContent />
        <Typography textType={"semiBold"}>Exercise Program</Typography>
        <VerticalItem />
      </View>
    </>
  );
};

export default ExerciseDetailMol;
