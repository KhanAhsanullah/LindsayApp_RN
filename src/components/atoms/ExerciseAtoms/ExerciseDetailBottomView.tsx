import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";

const ExerciseDetailBottomView = (props: any) => {
  return (
    <View style={[commonStyles.footerContainer, { marginTop: -30 }]}>
      <View row center marginV-20>
        <View row center>
          <Image
            source={IMAGES.calories}
            style={{ width: 15, height: 15 }}
            resizeMode="contain"
          />
          <Typography style={{ marginLeft: 10 }}>110 kcal</Typography>
        </View>
        <View
          style={{
            height: 15,
            borderWidth: 1,
            marginHorizontal: 15,
            borderColor: "#707070",
            alignSelf: "center",
          }}
        />
        <View row center>
          <Image
            source={IMAGES.clock}
            style={{ width: 15, height: 15 }}
            resizeMode="contain"
          />
          <Typography style={{ marginLeft: 10 }}>10 min</Typography>
        </View>
      </View>
    </View>
  );
};
export default ExerciseDetailBottomView;
