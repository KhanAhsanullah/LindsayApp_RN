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

const EditProfileData = () => {
  const [hasValidated, setValidated] = useState(new Array(6).fill(false));
  const [fname, setFName] = useState("John");
  const [lname, setLName] = useState("Smith");
  const [email, setEmail] = useState("abc@gmail.com");
  const [phone, setPhone] = useState("+51 234 23456778");
  return (
    <View style={commonStyles.footerContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileImg />
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
          validate={["fname"]}
          onChangeText={(text: string) => setFName(text)}
        />
        <InputText
          // label={"Email Address:"}
          value={lname}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[0] = isValid;
              return copy;
            });
          }}
          placeholder="Last Name"
          validate={["lname"]}
          style={{ marginTop: -10 }}
          onChangeText={(text: string) => setLName(text)}
        />
        <InputText
          // label={"Email Address:"}
          value={email}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[0] = isValid;
              return copy;
            });
          }}
          placeholder="Email Address"
          validate={["email"]}
          style={{ marginTop: -10 }}
          validationMessage={["Email is invalid"]}
          onChangeText={(text: string) => setEmail(text)}
        />
        <InputText
          // label={"Email Address:"}
          value={phone}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[0] = isValid;
              return copy;
            });
          }}
          placeholder="Mobile Number"
          validate={["phone"]}
          style={{ marginTop: -10 }}
          onChangeText={(text: string) => setPhone(text)}
        />

        <View marginV-40>
          <CustomBtn label="Edit Profile" onPress={() => onBack()} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileData;
