import React from "react";
import { View } from "react-native-ui-lib";
import ExerciseDetailTopView from "../../atoms/ExerciseAtoms/ExerciseDetailTopView";
import ExerciseDetailBottomView from "../../atoms/ExerciseAtoms/ExerciseDetailBottomView";
import VerticalItem from "../../atoms/ExerciseAtoms/VerticalItem";
import ExerciseDetailBottomContent from "../../atoms/ExerciseAtoms/ExerciseDetailBottomContent";
import { Typography } from "../../atoms/Typography";
import { commonStyles } from "../../../globalStyle";
import HomeDetailTopView from "../../atoms/HomeAtoms/HomeDetailTopView";
import HomeDetailBottomContent from "../../atoms/HomeAtoms/HomeDetailBottomContent";
import HorizentalItem from "../../atoms/ExerciseAtoms/HorizentalItem";
import HealthItem from "../../atoms/HomeAtoms/HealthItem";

const HomeDetailMol = () => {
  return (
    <>
        <HomeDetailBottomContent />
        <Typography textType={"semiBold"}>Categories:</Typography>
        <HealthItem />
    </>
  );
};

export default HomeDetailMol;
