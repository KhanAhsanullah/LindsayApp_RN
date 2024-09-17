import React from "react";
import HealthCoachingOrg from "../../organisms/HealthCoachingOrg";
import { commonStyles } from "../../../globalStyle";
import { View } from "react-native-ui-lib";
import HomeDetailTopView from "../../atoms/HomeAtoms/HomeDetailTopView";
import NutrtionTopView from "../../atoms/HomeAtoms/NutrtionTopView";
import NutritionOrg from "../../organisms/NutritionOrg";

const NutritionTamplet = () => {
  return (
    <>
      <NutrtionTopView />
      <View style={[commonStyles.footerContainer, { marginTop: -80 }]}>
      <NutritionOrg />
      </View>
    </>
  );
};

export default NutritionTamplet;
