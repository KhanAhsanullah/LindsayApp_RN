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
    <View style={{}}>
      <Image
        source={IMAGES.yogaImg}
        style={{ width: verticalScale(320), height: scale(350) }}
        resizeMode="cover"
      />
    </View>
  );
};
export default ExerciseDetailTopView;
