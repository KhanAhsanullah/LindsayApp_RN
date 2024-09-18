import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import ProfileData from "../../components/molecules/ProfileMOl/ProfileData";
import EditProfileData from "../../components/molecules/ProfileMOl/EditProfileData";

const EditProfile = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <View marginH-20 marginV-10>
        <DrawerTitle title={"Edit Profile"} />
      </View>
      <EditProfileData />
      
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({});

export default EditProfile;
