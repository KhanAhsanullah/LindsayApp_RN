import React from "react";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import WorkOutTamplet from "../../components/templates/WorkOutTamplet";
import { Typography } from "../../components/atoms/Typography";
import { View } from "react-native-ui-lib";
import { commonStyles } from "../../globalStyle";
import WorkoutSummaryContent from "../../components/atoms/WorkoutAtoms/WorkoutSummaryContent";
import WorkoutSummary from "../../components/atoms/WorkoutAtoms/WorkoutSummary";

const WorkoutResult = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <View marginV-20 style={commonStyles.footerContainer}>
       <WorkoutSummaryContent />
       <Typography textType="bold" style={{marginLeft:20}}>Workout Summary</Typography>
       <WorkoutSummary />
      </View>
    </SafeAreaContainer>
  );
};

export default WorkoutResult;
