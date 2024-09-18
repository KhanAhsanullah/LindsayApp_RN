import React, { useState } from "react";
import { InputText } from "../../atoms/InputText";
import { Button, View } from "react-native-ui-lib";
import { IMAGES, theme } from "../../../constants";
import { Typography } from "../../atoms/Typography";
import { CustomBtn } from "../../atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../redux/slice/user";

const SignUpFields = () => {
  const [hasValidated, setValidated] = useState(new Array(6).fill(false));
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [password, setPassword] = useState(true);
  const dispatch = useDispatch();
  return (
    <View backgroundColor={theme.color.white}>
      <View marginH-20 style={{ marginTop: 100 }}>
        <Typography
          align="center"
          size={theme.fontSize.extraLarge}
          textType="semiBold"
          color={theme.color.primary}
        >
          Sign Up
        </Typography>
        <Typography
          align="center"
          size={theme.fontSize.small}
          textType="semiBold"
          color={theme.color.descColor}
        >
          As a Nationally Board Certified Health and Wellness Coach, Elite
          Personal Trainer, In
        </Typography>
      </View>
      <View margin-20>
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
        <InputText
          // label={"Password:"}
          value={passwordVal}
          style={{ marginTop: -10 }}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[1] = isValid;
              return copy;
            });
          }}
          onPressRight={() => setPassword(!password)}
          secureTextEntry={password}
          rightImage={!password ? IMAGES.eyeOn : IMAGES.eyeOff}
          placeholder="Enter your password"
          validate={[
            (v) =>
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(v),
          ]}
          validationMessage={[
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          ]}
          onChangeText={(text: string) => setPasswordVal(text)}
        />

        <InputText
          // label={"Password:"}
          value={passwordVal}
          style={{ marginTop: -10 }}
          onValidationFailed={(isValid: boolean) => {
            setValidated((prev) => {
              let copy = [...prev];
              copy[1] = isValid;
              return copy;
            });
          }}
          onPressRight={() => setPassword(!password)}
          secureTextEntry={password}
          rightImage={!password ? IMAGES.eyeOn : IMAGES.eyeOff}
          placeholder="Enter your password"
          validate={[
            (v) =>
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(v),
          ]}
          validationMessage={[
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          ]}
          onChangeText={(text: string) => setPasswordVal(text)}
        />

        <View marginV-40>
          <CustomBtn
            label="Sign Up"
            onPress={() => dispatch(setLoggedIn(true))}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpFields;
