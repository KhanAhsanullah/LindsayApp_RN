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
      <View
        style={{
          ...commonStyles.footerContainer,
          marginTop: -80,
          elevation: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowOpacity: 0,
          shadowRadius: 0,
        }}
      >
        <NutritionOrg />
      </View>
    </>
  );
};

export default NutritionTamplet;
