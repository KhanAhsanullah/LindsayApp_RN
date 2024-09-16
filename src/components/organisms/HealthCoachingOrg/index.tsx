import React from "react";
import { View } from "react-native";
import CategoriesComp from "../../atoms/GlobalComponents/CategoriesComp";

const HealthCoachingOrg = () => {
  const goals = [
    { id: 1, title: "SMART Goals Framework" },
    { id: 2, title: "Goal Progress Visualization" },
    { id: 3, title: "Milestone Celebrations" },
    { id: 4, title: "Goal Achievement History" },
    { id: 5, title: "Integration with Fitness and Nutrition Goals" },
  ];

  const goalsDetails = [
    { id: 1, title: "Health Coaching Packages and Pricing" },
    { id: 2, title: "Available Health Coaching Packages" },
    { id: 3, title: "Other Health Coaching Packages" },
  ];

  return (
    <View>
      <CategoriesComp goals={goals} goalsDetails={goalsDetails} />
    </View>
  );
};

export default HealthCoachingOrg;
