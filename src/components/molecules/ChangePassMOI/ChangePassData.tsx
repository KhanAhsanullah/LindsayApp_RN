import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { commonStyles } from "../../../globalStyle";
import ProfileImg from "../../atoms/Profile/ProfileImg";
import ProfileList from "../../atoms/Profile/ProfileList";
import { useDispatch } from "react-redux";
import { IMAGES } from "../../../constants";
import { onBack } from "../../../navigation/RootNavigation";
import { CustomBtn } from "../../atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { InputText } from "../../atoms/InputText";

const ChangePassData = () => {
  const [hasValidated, setValidated] = useState(new Array(3).fill(false));
  const [current_pass, setCurrentPass] = useState("");
  const [new_pass, setNewPass] = useState("");
  const [confirm_pass, setConfirmPass] = useState("");
  return (
    <View style={commonStyles.footerContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputText
          // label={"Email Address:"}
          value={current_pass}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[0] = isValid;
              return copy;
            });
          }}
          placeholder="Current Password"
          validate={["required"]}
          validationMessage={["Required"]}
          onChangeText={(text: string) => setCurrentPass(text)}
        />
        <InputText
          // label={"Email Address:"}
          value={new_pass}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[1] = isValid;
              return copy;
            });
          }}
          placeholder="New Password"
          validate={["required"]}
          validationMessage={["Required"]}
          style={{ marginTop: -10 }}
          onChangeText={(text: string) => setNewPass(text)}
        />
        <InputText
          // label={"Email Address:"}
          value={confirm_pass}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[2] = isValid;
              return copy;
            });
          }}
          placeholder="Confirm Password"
          validate={["required"]}
          style={{ marginTop: -10 }}
          validationMessage={["Required"]}
          onChangeText={(text: string) => setConfirmPass(text)}
        />

        <View marginV-40>
          <CustomBtn label="Change Password" onPress={() => onBack()} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePassData;
