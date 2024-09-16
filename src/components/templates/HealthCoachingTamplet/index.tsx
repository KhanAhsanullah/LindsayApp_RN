import React from "react";
import HealthCoachingOrg from "../../organisms/HealthCoachingOrg";
import { commonStyles } from "../../../globalStyle";
import { View } from "react-native-ui-lib";
import HomeDetailTopView from "../../atoms/HomeAtoms/HomeDetailTopView";

const HealthCoachingTamplet = () => {
  return (
    <>
      <HomeDetailTopView />
      <View style={[commonStyles.footerContainer, { marginTop: -30 }]}>
        <HealthCoachingOrg />
        
      </View>
    </>
  );
};

export default HealthCoachingTamplet;
