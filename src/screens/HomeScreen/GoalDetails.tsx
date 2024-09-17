import React from "react";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import ExerciseMol from "../../components/molecules/ExerciseMol";
import { Image } from "react-native";
import { Typography } from "../../components/atoms/Typography";

const GoalDetails = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <View marginH-20>
       <Image source={IMAGES.leftIconWithColor}/>
       <Typography>Health Coaching{'\n'}Packages and Pricing</Typography>
      </View>
    </SafeAreaContainer>
  );
};

export default GoalDetails;
