import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import NotificatonList from "../../components/atoms/Notification/NotificatonList";
import { commonStyles } from "../../globalStyle";
import ProfileData from "../../components/molecules/ProfileMOl/ProfileData";
import { Typography } from "../../components/atoms/Typography";

const Profile = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <View marginH-20 marginV-10>
        <DrawerTitle title={"My Profile"} />
      </View>


        <ProfileData />
  
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({});

export default Profile;
