import React from "react";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/ExerciseAtoms/DrawerTitle";

const Exercise = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <View marginH-20>
       <DrawerTitle title={"Exercise"}/>
      </View>
    </SafeAreaContainer>
  );
};

export default Exercise;
