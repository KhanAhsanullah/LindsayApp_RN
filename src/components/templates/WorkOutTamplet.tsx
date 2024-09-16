import React from "react";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import ExerciseMol from "../../components/molecules/ExerciseMol";
import { Image, TouchableOpacity } from "react-native";
import { onBack } from "../../navigation/RootNavigation";
import { commonStyles } from "../../globalStyle";
import { Typography } from "../../components/atoms/Typography";
import ProgreeBar from "../../components/atoms/WorkoutAtoms/ProgressBar";
import WorkoutBtn from "../atoms/WorkoutAtoms/WorkoutBtn";

const WorkOutTamplet = () => {
  return (
    <>
      <View margin-20>
        <TouchableOpacity onPress={() => onBack()}>
          <Image
            source={IMAGES.leftIconWithColor}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
      <View style={commonStyles.footerContainer}>
        <Typography
          align="center"
          textType="semiBold"
          style={{ marginVertical: 20 }}
          size={theme.fontSize.large20}
        >
          Stretching Workout{"\n"}Length
        </Typography>
        <Typography align="center" style={{ marginVertical: 10 }} size={theme.fontSize.medium}>00:20:30</Typography>
        <ProgreeBar />
        <WorkoutBtn />
        <View center>
        <Typography textType={'semiBold'} size={theme.fontSize.large24}>Next: Arm Circles</Typography>
        <Typography color={theme.color.descColor} size={theme.fontSize.large}>40 Seconds Active, 2 sets</Typography>
        </View>
      </View>
    </>
  );
};

export default WorkOutTamplet;
