import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { commonStyles } from "../../../globalStyle";
import ProfileImg from "../../atoms/Profile/ProfileImg";
import ProfileList from "../../atoms/Profile/ProfileList";

const ProfileData = () => {
  return (
    <View style={commonStyles.footerContainer}>
        <ProfileImg />
        <ProfileList />

    </View>
  );
};


export default ProfileData;
