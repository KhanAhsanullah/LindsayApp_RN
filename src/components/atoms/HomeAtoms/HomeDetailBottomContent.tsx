import React, { useState } from "react";
import { Button, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { SCREENS, theme } from "../../../constants";
import { navigate } from "../../../navigation/RootNavigation";

const HomeDetailBottomContent = (props: any) => {
  return (
    <View marginV-20>
      <Typography align="center" textType="bold" size={theme.fontSize.large20}>What is Board Certified Health Coaching?</Typography>
      <Typography color={theme.color.descColor} size={theme.fontSize.extraSmall12}>A board-certified health coach is a dedicated professional who combines expertise in preventive lifestyle medicine with specialized services for individuals grappling with chronic health issues. They possess a deep understanding of nutrition, physical activity, stress management, and behavior change.</Typography>
    </View>
  );
};
export default HomeDetailBottomContent;
