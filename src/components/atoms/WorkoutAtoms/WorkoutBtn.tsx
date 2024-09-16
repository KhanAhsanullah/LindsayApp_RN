import React from "react";
import { Button, View } from "react-native-ui-lib";
import { CustomBtn } from "../OnBoardingAtoms/OnBeardingBottomBtn";
import { StyleSheet } from "react-native";
import { SCREENS, theme } from "../../../constants";
import { navigate } from "../../../navigation/RootNavigation";

const WorkoutBtn = () => {
  return (
    <View row center gap-20>
      <Button
        label="Pause"
        backgroundColor={theme.color.primarybeta}
        style={styles.btnStyle}
      />
      <Button
        label="Skip This"
        backgroundColor={theme.color.darkGray}
        style={styles.btnStyle}
        onPress={()=>navigate(SCREENS.WORKOUT_RESULT)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    marginVertical:50,
    borderRadius: 10,
    height: 60,
    flex:1
  },
});
export default WorkoutBtn;
