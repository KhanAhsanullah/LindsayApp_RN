import React from "react";
import { Button, Text, View } from "react-native-ui-lib";
import { theme } from "../../../constants";

export const CustomBtn = (props: any) => {
  const {onPress = ()=>{},label,backgroundColor =theme.color.primarybeta} = props;
  return (
      <Button
        label={label}
        backgroundColor={backgroundColor}
        onPress={onPress}
        style={{paddingVertical:20,borderRadius:10}}
      />
  );
};
