import React, { useEffect } from "react";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import { ScrollView } from "react-native";
import HealthCoachingTamplet from "../../components/templates/HealthCoachingTamplet";
import { useDispatch } from "react-redux";
import { MainActions } from "../../redux/actions/MainActions";
import { useRoute } from "@react-navigation/native";

const HealthCoaching = () => {



  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff" }}>
        <HealthCoachingTamplet />
        <HeaderHome color={theme.color.white} abs={true} />
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default HealthCoaching;
