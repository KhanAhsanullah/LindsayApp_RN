import React from "react";
import { commonStyles } from "../../../globalStyle";
import { View } from "react-native-ui-lib";
import HomeDetailTopView from "../../atoms/HomeAtoms/HomeDetailTopView";
import HomeDetailMol from "../../molecules/HomeMol/HomeDetailMol";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { CustomBtn } from "../../atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { navigate } from "../../../navigation/RootNavigation";
import { SCREENS } from "../../../constants";

const HealthCoachingTamplet = () => {
  const { AllCategoryData } = useSelector((state) => state.Main);
  const { params } = useRoute();

  return (
    <>
      <HomeDetailTopView data={AllCategoryData[params?.index]} />
      <View style={[commonStyles.footerContainer, { marginTop: -30 }]}>
        <HomeDetailMol data={AllCategoryData[params?.index]} />
      </View>
      {params?.index == 0 && (
        <CustomBtn
          style={{ margin: 20 }}
          label="Book a Coaching Session"
          onPress={() => navigate(SCREENS.BOOKING)}
        />
      )}
    </>
  );
};

export default HealthCoachingTamplet;
