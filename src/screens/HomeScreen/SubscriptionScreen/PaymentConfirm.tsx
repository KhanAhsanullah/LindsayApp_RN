import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { View } from "react-native-ui-lib";
import { useDispatch, useSelector } from "react-redux";
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import HeaderHome from "../../../components/atoms/HomeAtoms/HeaderHome";
import { IMAGES, SCREEN_WIDTH, theme } from "../../../constants";
import { CustomBtn } from "../../../components/atoms/OnBoardingAtoms/OnBeardingBottomBtn";
import { Typography } from "../../../components/atoms/Typography";
import { onBack } from "../../../navigation/RootNavigation";
import LinearGradient from "react-native-linear-gradient";
import { InputText } from "../../../components/atoms/InputText";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MainActions } from "../../../redux/actions/MainActions";

const PaymentConfirm = () => {
  const dispatch = useDispatch<any>();
  const route = useRoute();
  const { selectedPackageId } = useSelector((state: any) => state.Main);
  
  // Get package ID from route params or Redux state
  const packageId = (route.params as any)?.packageId || selectedPackageId;
  
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const inputRef = useRef([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigation = useNavigation();

  // Validation state for each field
  const [validationState, setValidationState] = useState({
    name: false,
    cardNumber: false,
    expiry: false,
    cvc: false,
  });

  // console.log("packageId",validationState)

  // Check if all fields are valid
  const isFormValid = validationState.name && validationState.cardNumber && validationState.expiry && validationState.cvc;

  // Debug validation state
  console.log("Validation State:", validationState);
  console.log("Form Valid:", isFormValid);
  console.log("Field Values:", { name: name.length, cardNumber: cardNumber.length, expiry: expiry.length, cvc: cvc.length });

  // Format card number with spaces
  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\s/g, '');
    const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
    return formatted.substring(0, 19); // Max 16 digits + 3 spaces
  };

  // Format expiry date
  const formatExpiry = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  const handlePayment = async () => {
    if (!packageId) {
      Alert.alert("Error", "Please select a subscription package first.");
      return;
    }

    // Check if all fields are valid
    if (!isFormValid) {
      Alert.alert("Error", "Please fill in all payment details correctly.");
      return;
    }

    try {
      setIsProcessing(true);
      
      // Call the subscription API
      const result = await dispatch(MainActions.SubscribeToPackage({ 
        package_id: packageId 
      }));
      
      if (result.type === 'main/SubscribeToPackage/fulfilled') {
        // Show success modal
        setModalVisible(true);
      } else {
        Alert.alert("Error", "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      Alert.alert("Error", "An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView>
      <View flex backgroundColor="#fff">
        <View marginH-20 marginV-10>
          {/* <DrawerTitle title={"Payment Method"} /> */}
          <View row style={{ gap: 10, alignItems: "center" }}>
            <TouchableOpacity onPress={() => onBack()}>
              <Image
                source={IMAGES.leftIconWithColor}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Typography textType="semiBold" size={theme.fontSize.large20}>
              Payment Method
            </Typography>
          </View>
          
          {/* {packageId && (
            <View marginV-10 padding-10 style={{ backgroundColor: theme.color.inputTypeColor, borderRadius: 8 }}>
              <Typography textType="medium" size={theme.fontSize.small}>
                Selected Package ID: {packageId}
              </Typography>
            </View>
          )} */}
          
          <View marginV-20>
            <Image
              source={IMAGES.visa}
              style={{ width: "100%", height: 200 }}
              resizeMode="contain"
            />
          </View>
          
          <InputText
            label={""}
            value={name}
            placeholder="Name on Card"
            validate={["required"]}
            validationMessage={["Cardholder name is required"]}
            onValidationFailed={(isValid: boolean) => {
              setValidationState(prev => ({ ...prev, name: isValid }));
            }}
            onChangeText={(text: string) => setName(text)}
          />

          <InputText
            label={""}
            value={cardNumber}
            placeholder="Card Number"
            keyboardType="numeric"
            validate={["required",(value:string)=>{
              const cleanedCardNumber = value.replace(/\s/g, '');
              const isCardValid = cleanedCardNumber.length >= 13 && value.length > 0;
              return isCardValid;
            }]}
            validationMessage={["Card number is required","Card number must be 13 digits"]}
            maxLength={19}
            onValidationFailed={(isValid: boolean) => {
              // Additional validation for card number format
              const cleanedCardNumber = cardNumber.replace(/\s/g, '');
              const isCardValid = isValid && cleanedCardNumber.length >= 13;
              setValidationState(prev => ({ ...prev, cardNumber: isCardValid }));
            }}
            onChangeText={(text: string) => {
              const formatted = formatCardNumber(text);
              setCardNumber(formatted);
            }}
          />
          
          <View row spread width={"100%"}>
            <InputText
              label={""}
              value={expiry}
              keyboardType="numeric"
              placeholder="MM/YY"
              validate={["required",(value:string)=>{
                const isExpiryValid = value.length === 5 && value.includes('/');
                return isExpiryValid;
              }]}
              validationMessage={["Expiry date is required","Expiry date must be in MM/YY format"]}
              style={{ width: scale(150) }}
              maxLength={5}
              onValidationFailed={(isValid: boolean) => {
                // Additional validation for expiry format
                const isExpiryValid = isValid && expiry.length === 5 && expiry.includes('/');
                setValidationState(prev => ({ ...prev, expiry: isExpiryValid }));
              }}
              onChangeText={(text: string) => {
                const formatted = formatExpiry(text);
                setExpiry(formatted);
              }}
            />

            <InputText
              label={""}
              value={cvc}
              placeholder="CVV"
              keyboardType="numeric"
              validate={["required",(value:string)=>{
                const cleanedCvc = value.replace(/\D/g, '');
                const isCvcValid = cleanedCvc.length >= 3 && value.length > 0;
                return isCvcValid;
              }]}
              validationMessage={["CVV is required","CVV must be 3 digits"]}
              style={{ width: scale(150) }}
              maxLength={4}
              onValidationFailed={(isValid: boolean) => {
                // Additional validation for CVC length
                const isCvcValid = isValid && cvc.length >= 3;
                setValidationState(prev => ({ ...prev, cvc: isCvcValid }));
              }}
              onChangeText={(text: string) => {
                const cleaned = text.replace(/\D/g, '');
                setCvc(cleaned);
              }}
            />
          </View>
          
          {/* Debug validation status
          <View marginV-10 padding-10 style={{ backgroundColor: '#f0f0f0', borderRadius: 8 }}>
            <Typography textType="semiBold" size={theme.fontSize.small}>Validation Status:</Typography>
            <Typography size={theme.fontSize.extraSmall} color={validationState.name ? 'green' : 'red'}>
              Name: {validationState.name ? '✓ Valid' : '✗ Invalid'} ({name.length} chars)
            </Typography>
            <Typography size={theme.fontSize.extraSmall} color={validationState.cardNumber ? 'green' : 'red'}>
              Card: {validationState.cardNumber ? '✓ Valid' : '✗ Invalid'} ({cardNumber.replace(/\s/g, '').length} digits)
            </Typography>
            <Typography size={theme.fontSize.extraSmall} color={validationState.expiry ? 'green' : 'red'}>
              Expiry: {validationState.expiry ? '✓ Valid' : '✗ Invalid'} ({expiry.length} chars)
            </Typography>
            <Typography size={theme.fontSize.extraSmall} color={validationState.cvc ? 'green' : 'red'}>
              CVC: {validationState.cvc ? '✓ Valid' : '✗ Invalid'} ({cvc.length} chars)
            </Typography>
          </View> */}
          
          <View marginT-40>
            <CustomBtn 
              label={isProcessing ? "Processing..." : "Pay Now"} 
              onPress={handlePayment}
              disabled={isProcessing || !isFormValid}
            />
          </View>
        </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ width: verticalScale(270) }}>
              <View center>
                <Typography textType="semiBold" size={theme.fontSize.large20}>
                  Congratulations!
                </Typography>
                <Typography
                  align="center"
                  color={theme.color.descColor}
                  size={theme.fontSize.extraSmall12}
                  style={{ margin: 20 }}
                >
                  Your subscription has been successfully activated. You can now enjoy all the premium features!
                </Typography>
                <CustomBtn
                  label="Done"
                  style={{ width: "80%", marginVertical: 20 }}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.goBack();
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaContainer>
  );
};

const CreditCard = ({ expiry, number, holder, cvc }: any) => {
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
    borderColor: "red",
    // top: 10,
    justifyContent: "center",
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: theme.color.white,
    borderRadius: 20,
    paddingTop: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default PaymentConfirm;
