import React from "react";
import { commonStyles } from "../../../globalStyle";
import { View } from "react-native-ui-lib";
import HomeDetailTopView from "../../atoms/HomeAtoms/HomeDetailTopView";
import HomeDetailMol from "../../molecules/HomeMol/HomeDetailMol";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

const HealthCoachingTamplet = () => {

  const { AllCategoryData } = useSelector(state => state.Main)
  const { params } = useRoute();

  return (
    <>
      <HomeDetailTopView data={AllCategoryData[params?.index]} />
      <View style={[commonStyles.footerContainer, { marginTop: -30 }]}>
        <HomeDetailMol data={AllCategoryData[params?.index]} />
      </View>
    </>
  );
};

export default HealthCoachingTamplet;
