import React, { useState } from "react";
import { Button, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { theme } from "../../../constants";

const ExerciseDetailBottomContent = (props: any) => {
  return (
    <View marginV-20>
      <Typography size={theme.fontSize.large20}>Exercises with Sitting Dumbbells</Typography>
      <Typography color={theme.color.descColor} size={theme.fontSize.extraSmall12}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</Typography>
      <View row spread marginV-30 style={{flex:1,alignItems:'center'}}>
        <Typography  size={theme.fontSize.medium} textType="semiBold">3 Weeks - 20 Exercise</Typography>
        <Button label="Start Now" backgroundColor={theme.color.primarybeta} style={{flex:0.5,borderRadius:10}}/>
      </View>
    </View>
  );
};
export default ExerciseDetailBottomContent;
