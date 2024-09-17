import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "react-native-linear-gradient";
// import { formatWithMask } from "react-native-mask-input";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import { InputText } from "../../../components/atoms/InputText";
import { onBack } from "../../../navigation/RootNavigation";
import { CustomBtn } from "../../../components/atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { Typography } from "../../../components/atoms/Typography";
import { theme } from "../../../constants";

const PaymentConfirm = () => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const inputRef = useRef([]);
  const cardMask = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
  ];
  const expiryMask = [/[0-1]/, /[0-9]/, "/", /[2]/, /[1-9]/];
  return (
    <SafeAreaContainer safeArea={false}>
     {/* Header yaha ayga  */}
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1, marginVertical: 20 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <CreditCard
            expiry={expiry}
            number={cardNumber}
            holder={name}
            cvc={cvc}
          />

          <View style={styles.formContainer}>
            <InputText
              inputStyle={{ color: "#000" }}
              title={"Card Holder Name"}
              placeholder={"Enter card holder name"}
              onChangeText={(text:any) => {
                setName(text)
              }}
              value={name}
              // error={errors.name}
              keyboardType={"default"}
              maxLength={50}
              returnKeyType={"next"}
              inputRef={(e) => (inputRef["name"] = e)}
              style={{ marginBottom: 20 }}
              onSubmitEditing={() => inputRef["cardNumber"]?.focus()}
            />

            <InputText
              inputStyle={{ color: "#000" }}
              title={"Card Number"}
              maxLength={23}
              placeholder={"**** **** **** 4242"}
              // onChangeText={(text) => {
              //   setCardNumber(
              //     formatWithMask({
              //       text: text,
              //       mask: cardMask,
              //     }).masked
              //   ),
              //     (errors.cardNumber = "");
              // }}
              value={cardNumber}
              error={errors.cardNumber}
              keyboardType={"number-pad"}
              returnKeyType={"done"}
              inputRef={(e) => (inputRef["cardNumber"] = e)}
              style={{ marginBottom: 20 }}
              onSubmitEditing={() => Keyboard.dismiss()}
            />

            <View style={{ flexDirection: "row" }}>
            
              <InputText
                inputStyle={{ color: "#000" }}
                title={"Expiry Date"}
                placeholder={"Expiry - MM/YY"}
                maxLength={5}
                onChangeText={(text) => {
                  const exp = text.split("/");
                  const today = new Date();
                  let someday = new Date();
                  someday.setFullYear(`20${exp[1]}`, exp[0] - 1, 1);
                  console.log("exp", exp, someday);

                  // if (someday < today) {
                  //   errors.expiry = "Expiry Should be greater then this month";
                  //   errors.expiry = "Expiration date is incorrect";
                  // } else {
                  //   errors.expiry = "";
                  // }

                  // setExpiry(
                  //   formatWithMask({
                  //     text: text,
                  //     mask: expiryMask,
                  //   }).masked
                  // );
                }}
                value={expiry}
                // error={errors.expiry}
                keyboardType={"number-pad"}
                returnKeyType={"done"}
                inputRef={(e) => (inputRef["expiry"] = e)}
                style={{ marginBottom: 20, flex: 1 }}
                onSubmitEditing={() => inputRef["cvc"]?.focus()}
              />

              <InputText
                inputStyle={{ color: "#000" }}
                title={"CVV/CVC"}
                placeholder={"***"}
                maxLength={4}
                onChangeText={(text) => {
                  setCvc(text)
                }}
                value={cvc}
                // error={errors.cvc}
                keyboardType={"number-pad"}
                returnKeyType={"done"}
                inputRef={(e) => (inputRef["cvc"] = e)}
                style={{ marginBottom: 20, flex: 1, marginLeft: 10 }}
                onSubmitEditing={() => Keyboard.dismiss()}
              />
            </View>
          </View>
          <View style={{ marginVertical: 20 }}>
            <CustomBtn label={"Save & Update"} onPress={() => onBack()} />

            <TouchableOpacity
              onPress={() => onBack()}
              style={{ marginTop: 10 }}
            >
              <Typography children={"Cancel"} size={16} align={"center"} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
};

const CreditCard = ({ expiry, number, holder, cvc }:any) => {
  return (
    <LinearGradient
      colors={[theme.color.primary, theme.color.primary]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        height: 180,
        borderRadius: 20,
        padding: 20,
      }}
    >
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Typography
          children={"Lindsay App"}
          color={"#fff"}
          size={18}
          textType={"semiBold"}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {Array(4)
          .fill("****")
          .map((i, index) => (
            <Typography
              children={number.split(" ")[index] || i}
              color={"#fff"}
              size={20}
              textType={"light"}
            />
          ))}
        {Array(1)
          .fill("***")
          .map((i, index) => (
            <Typography
              children={number.split(" ")[4] || i}
              color={"#fff"}
              size={20}
              textType={"light"}
            />
          ))}
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <View style={{ width: "50%" }}>
          <Typography
            children={"Card Holder Name"}
            color={"#fff"}
            size={10}
            textType={"light"}
            numberOfLines={2}
          />
          <Typography children={holder || "******"} color={"#fff"} size={14} />
        </View>
        <View>
          <Typography
            children={"CVC"}
            color={"#fff"}
            size={10}
            textType={"light"}
          />
          <Typography children={cvc || "***"} color={"#fff"} size={14} />
        </View>
        <View>
          <Typography
            children={"Expiry Date"}
            color={"#fff"}
            size={10}
            textType={"light"}
          />
          <Typography children={expiry || "****/**"} color={"#fff"} size={14} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  
  contentContainer: {
    paddingHorizontal: 30,
  },
  formContainer: {
    marginTop: 20,
  },
  container: {
    height: 80,
    backgroundColor: "#fff",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  calenderPicker: {
    height: 55,
    width: "100%",
    borderWidth: 1.5,
    borderColor: 'red',
    // top: 10,
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default PaymentConfirm;
