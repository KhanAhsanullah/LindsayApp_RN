import React from "react";
import { View } from "react-native";
import CategoriesComp from "../../atoms/GlobalComponents/CategoriesComp";
import HomeDetailMol from "../../molecules/HomeMol/HomeDetailMol";
import { navigate } from "../../../navigation/RootNavigation";
import { SCREENS } from "../../../constants";

const HealthCoachingOrg = () => {
  const goals = [
    { id: 1, title: "SMART Goals Framework" },
    { id: 2, title: "Goal Progress Visualization" },
    { id: 3, title: "Milestone Celebrations" },
    { id: 4, title: "Goal Achievement History" },
    { id: 5, title: "Integration with Fitness and Nutrition Goals" },
  ];

  const goalsDetails = [
    { id: 1, title: "Health Coaching Packages and Pricing", navigateTo:SCREENS.GOAL_DETAILS },
    { id: 2, title: "Available Health Coaching Packages",navigateTo:SCREENS.GOAL_DETAILS },
    { id: 3, title: "Other Health Coaching Packages",navigateTo:SCREENS.GOAL_DETAILS },
  ];

  return (
    <View>
      <HomeDetailMol />
      <CategoriesComp goals={goals} goalsDetails={goalsDetails} />
    </View>
  );
};

export default HealthCoachingOrg;
