import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import HeaderHome from "../../../components/atoms/HomeAtoms/HeaderHome";
import { theme } from "../../../constants";
import DrawerTitle from "../../../components/atoms/DrawerTitle";
import { commonStyles } from "../../../globalStyle";
import SubscriptionPackages from "../../../components/molecules/SubsciptionMol/SubscriptionPackages";

const Subscription = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <View marginH-20 marginV-10>
        <DrawerTitle title={"Subscription"} />
      </View>

      <View style={commonStyles.footerContainer}>
        <SubscriptionPackages />
      </View>
    </SafeAreaContainer>
  );
};

export default Subscription;
