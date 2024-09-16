import React from "react";
import HealthCoachingOrg from "../../organisms/HealthCoachingOrg";
import { commonStyles } from "../../../globalStyle";
import { View } from "react-native-ui-lib";
import HomeDetailTopView from "../../atoms/HomeAtoms/HomeDetailTopView";
import FitnessOrg from "../../organisms/FitnessOrg";
import { Image } from "react-native";
import { IMAGES } from "../../../constants";
import { scale, verticalScale } from "react-native-size-matters";

const FitnessTamplet = () => {
  return (
    <>
       <Image
        source={IMAGES.dummy}
        style={{ width: verticalScale(320), height: scale(350) }}
        resizeMode='contain'
      />
      <View style={[commonStyles.footerContainer, { marginTop: -30 }]}>
        <FitnessOrg />
      </View>
    </>
  );
};

export default FitnessTamplet;
