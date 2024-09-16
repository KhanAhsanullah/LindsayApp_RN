import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";

const ExerciseDetailTopView = (props: any) => {
  const { onPress } = props;
  return (
    <View  style={{marginTop:-20}}>
      <Image
        source={IMAGES.car1}
        style={{ width: 415, height: 435 }}
        resizeMode="contain"
      />
    </View>
  );
};
export default ExerciseDetailTopView;
