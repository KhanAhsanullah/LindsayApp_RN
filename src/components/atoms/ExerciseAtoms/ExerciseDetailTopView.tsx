import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";
import { scale, verticalScale } from "react-native-size-matters";

const ExerciseDetailTopView = (props: any) => {
  const { onPress } = props;
  return (
    <View style={{marginTop:-20}}>
      <Image
        source={IMAGES.car1}
        style={{ width: verticalScale(320), height: scale(350) }}
        resizeMode="contain"
      />
    </View>
  );
};
export default ExerciseDetailTopView;
