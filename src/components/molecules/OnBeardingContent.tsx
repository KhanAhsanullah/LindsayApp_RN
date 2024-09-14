import React from "react";
import {  SCREENS, theme } from "../../constants";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { commonStyles } from "../../globalStyle";
import { Typography } from "../atoms/Typography";
import { navigate } from "../../navigation/RootNavigation";
import { OnBoardingBtn } from "../atoms/OnBoardingAtoms/OnBoardingBtn";

export const OnBeardingContent = (props: any) => {
  return (
    <View center marginT-10 marginH-20>
      <Typography
        textType="bold"
        align="center"
        size={theme.fontSize.extraLarge}
        color={ theme.color.white}
      >
        Take Health{"\n"}into your own hands
      </Typography>
      <View
        marginV-20
        style={[commonStyles.lineBar, { borderColor: theme.color.white }]}
      />
      <Typography
        textType="semibold"
        align="center"
        size={theme.fontSize.medium}
        color={ theme.color.white}
      >
        As a Nationally Board Certified Health and Wellness Coach, Elite
        Personal Trainer,
      </Typography>
      <OnBoardingBtn onPress={()=>navigate(SCREENS.LOGIN)}/>
    </View>
  );
};

const styles = StyleSheet.create({});
