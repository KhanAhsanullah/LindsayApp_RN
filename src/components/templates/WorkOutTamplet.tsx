import React, { useEffect, useRef, useState } from "react";
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
import { useRoute } from "@react-navigation/native";

const WorkOutTamplet = () => {
  const { params } = useRoute();
  const [seconds, setSeconds] = useState(0);
  const timer = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    startTime();

    return () => {
      clearInterval(timer.current);
    }
  }, [])

  const startTime = () => {
    timer.current = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)
  }

  const getTime = () => {
    let secs = seconds % 60
    let minutes = seconds / 60
    return (minutes < 9 ? "0" + Math.floor(minutes) : Math.floor(minutes)) + ":" + (secs < 9 ? "0" + Math.floor(secs) : Math.floor(secs))
  }

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
          {params?.data?.title}
        </Typography>
        <Typography align="center" style={{ marginVertical: 10 }} size={theme.fontSize.medium}>{getTime()}</Typography>
        <ProgreeBar />
        <WorkoutBtn />
        <View center>
          <Typography color={theme.color.descColor} size={theme.fontSize.large}>40 Seconds Active, {params?.data?.work_sets} sets</Typography>
          <Typography textType={'semiBold'} size={theme.fontSize.medium}>Next: {params?.list[params?.index + 1]?.title}</Typography>
        </View>
      </View>
    </>
  );
};

export default WorkOutTamplet;
