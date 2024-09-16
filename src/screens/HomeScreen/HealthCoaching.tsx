import React from "react";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import { ScrollView } from "react-native";
import HealthCoachingTamplet from "../../components/templates/HealthCoachingTamplet";

const HealthCoaching = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ top: -10 }}>
        <HealthCoachingTamplet />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default HealthCoaching;
