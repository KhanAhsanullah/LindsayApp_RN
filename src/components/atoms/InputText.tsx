import { Image, TextField, TouchableOpacity } from "react-native-ui-lib";
import { useState } from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Keyboard, Platform } from "react-native";
import { IMAGES, theme } from "../../constants";

export const InputText = (props: any) => {
  const {
    placeholder = "",
    placeholderTextColor = theme.color.black,
    maxLength = 50,
    onChangeText = () => {},
    validationMessage = "Field is required",
    validate = "email",
    leftIcon = false,
    rightIcon = false,
    leftImage,
    rightImage = false,
    showCharCounter = false,
    keyboardType = "default",
    onValidationFailed = () => {},
    secureTextEntry = false,
    style = {},
    label = true,
    multiline = false,
    onPressRight = () => {},
  } = props;
  const [secureEntry, setSecureEntry] = useState(true);
  return (
    <TextField
      black
      extraSmall12
      allowFontScaling={false}
      label={label}
      labelStyle={{
        fontSize: moderateScale(12),
      }}
      labelColor={theme.color.descColor}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      enableErrors
      validate={[(value: any) => value.length > 6, ...validate]}
      validationMessage={["", ...validationMessage]}
      showCharCounter={showCharCounter}
      validateOnChange
      onChangeValidity={onValidationFailed}
      maxLength={maxLength}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      keyboardType={keyboardType}
      fieldStyle={{
        height: verticalScale(45),
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: Platform.OS == "ios" ? 20 : 0,
        borderWidth: 0.2,
        borderRadius: 10,
        backgroundColor: theme.color.inputTypeColor,

        ...style,
      }}
      {...(leftIcon
        ? {
            leadingAccessory: (
              <Image
                source={leftImage}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 10,
                  resizeMode: "contain",
                }}
              />
            ),
          }
        : null)}
      {...(rightImage
        ? {
            trailingAccessory: (
              <TouchableOpacity onPress={onPressRight}>
                <Image
                  source={secureTextEntry ? IMAGES.eyeOn : IMAGES.eyeOff}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    tintColor: theme.color.black,
                  }}
                />
              </TouchableOpacity>
            ),
          }
        : null)}
    />
  );
};
