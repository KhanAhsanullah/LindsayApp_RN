import React from "react";
import {  View } from "react-native-ui-lib";
import {  theme } from "../../../constants";
import { Typography } from "../Typography";

const WorkoutSummaryContent = () => {
  return (
    <View center marginV-20>
          <Typography textType="bold" size={theme.fontSize.large24}>
            Workout Result
          </Typography>
          <Typography size={theme.fontSize.extraSmall12} color={theme.color.descColor}>
            Exercises with Sitting Dumbbells
          </Typography>
          <Typography size={theme.fontSize.extraSmall12} color={theme.color.descColor}>
            Completed on 24/02/2022
          </Typography>
          <Typography size={theme.fontSize.extraSmall12} color={theme.color.descColor}>
            Exercise 3/12
          </Typography>
        </View>
  );
};

export default WorkoutSummaryContent;
