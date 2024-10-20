import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { commonStyles } from "../../../globalStyle";
import ProfileImg from "../../atoms/Profile/ProfileImg";
import ProfileList from "../../atoms/Profile/ProfileList";
import { useSelector } from "react-redux";
import { States } from "../../../utils/types";

const ProfileData = () => {
  const { user } = useSelector((state: States) => state.Auth);
  console.warn(user)
  return (
    <View style={commonStyles.footerContainer}>
      <ProfileImg image={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} />
      <ProfileList />

    </View>
  );
};


export default ProfileData;
