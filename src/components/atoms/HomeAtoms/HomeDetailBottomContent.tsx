import React from "react";
import { View } from "react-native-ui-lib";
import { theme } from "../../../constants";
import ContentComp from "../GlobalComponents/ContentComp";

const HomeDetailBottomContent = () => {
  return (
    <View>
      <ContentComp
        title="What is Board Certified Health Coaching?"
        content="A board-certified health coach is a dedicated professional who combines expertise in preventive lifestyle medicine with specialized services for individuals grappling with chronic health issues. They possess a deep understanding of nutrition, physical activity, stress management, and behavior change."
      />
    </View>
  );
};

export default HomeDetailBottomContent;
