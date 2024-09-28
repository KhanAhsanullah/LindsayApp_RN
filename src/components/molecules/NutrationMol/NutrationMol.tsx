import React from "react";
import { Typography } from "../../atoms/Typography";
import HealthItem from "../../atoms/HomeAtoms/HealthItem";
import ContentComp from "../../atoms/GlobalComponents/ContentComp";
import { View } from "react-native-ui-lib";

const NutrationMol = () => {
  return (
    <View>
      <View paddingH-20>
        <ContentComp
          title={`What is Nutritional \n Coaching?`}
          content="Nutritional coaching holds paramount importance in our quest for better health and well-being. It serves as a compass, guiding individuals toward informed dietary choices and a sustainable relationship with food."
        />
      </View>
      <Typography textType={"semiBold"}>Categories:</Typography>
      <HealthItem />
    </View>
  );
};

export default NutrationMol;
