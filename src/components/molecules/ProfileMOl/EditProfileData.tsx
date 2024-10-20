import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ToastPresets, View } from "react-native-ui-lib";
import { commonStyles } from "../../../globalStyle";
import ProfileImg from "../../atoms/Profile/ProfileImg";
import ProfileList from "../../atoms/Profile/ProfileList";
import { useDispatch, useSelector } from "react-redux";
import { IMAGES } from "../../../constants";
import { onBack } from "../../../navigation/RootNavigation";
import { CustomBtn } from "../../atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { InputText } from "../../atoms/InputText";
import { States } from "../../../utils/types";
import { AuthActions } from "../../../redux/actions/AuthActions";
import { showHideToast } from "../../../redux/slices/OtherSlice";

const EditProfileData = () => {
  const [hasValidated, setValidated] = useState(new Array(2).fill(true));
  const { user } = useSelector((state: States) => state.Auth);
  const [fname, setFName] = useState(user?.first_name);
  const [lname, setLName] = useState(user?.last_name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.mobile_number);
  const dispatch = useDispatch();

  const EditProfile = async () => {
    if (!hasValidated.includes(false)) {
      await dispatch(AuthActions.EditProfile({
        first_name: fname,
        last_name: lname,
        mobile_number: phone
      })).then((v) => {
        let status = v.meta.requestStatus;
        if (status == "fulfilled") {
          dispatch(showHideToast({
            visible: true,
            message: "Profile has bee updated",
            preset: ToastPresets.SUCCESS
          }))
          onBack();
        }
      });
    }
  }

  return (
    <View style={commonStyles.footerContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileImg image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
        <InputText
          // label={"Email Address:"}
          value={fname}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[0] = isValid;
              return copy;
            });
          }}
          placeholder="First Name"
          validationMessage={["First name is required"]}
          validate={["required"]}
          onChangeText={(text: string) => setFName(text)}
        />
        <InputText
          // label={"Email Address:"}
          value={lname}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[1] = isValid;
              return copy;
            });
          }}
          placeholder="Last Name"
          validationMessage={["Last name is required"]}
          validate={["required"]}
          style={{ marginTop: -10 }}
          onChangeText={(text: string) => setLName(text)}
        />
        <InputText
          // label={"Email Address:"}
          editable={false}
          value={email}
          // onValidationFailed={(isValid: boolean) => {
          //   setValidated((prev) => {
          //     let copy = [...prev];
          //     copy[0] = isValid;
          //     return copy;
          //   });
          // }}
          placeholder="Email Address"
          // validate={["email"]}
          style={{ marginTop: -10 }}
          //validationMessage={["Email is invalid"]}
          onChangeText={(text: string) => setEmail(text)}
        />
        <InputText
          // label={"Email Address:"}
          value={phone}
          placeholder="Mobile Number"
          style={{ marginTop: -10 }}
          onChangeText={(text: string) => setPhone(text)}
        />

        <View marginV-40>
          <CustomBtn label="Edit Profile" onPress={() => EditProfile()} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileData;
