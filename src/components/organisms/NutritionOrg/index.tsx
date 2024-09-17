import React from "react";
import { View } from "react-native";
import CategoriesComp from "../../atoms/GlobalComponents/CategoriesComp";
import NutrationMol from "../../molecules/NutrationMol/NutrationMol";

const NutritionOrg = () => {
  const goals = [
    { id: 1, title: "Barcode Scanner for Easy Logging" },
    { id: 2, title: "Macro and Micro Nutrient Breakdown" },
    { id: 3, title: "Meal Timing and Portion Sizes" },
    { id: 4, title: "Integration with Fitness Goals" },
    { id: 5, title: "Food Log History and Trends" },
  ];

  const goalsDetails = [
    { id: 1, title: "Nutrition Coaching Packages and Pricing" },
    { id: 2, title: "Considering Follow-Up Sessions?" },
    { id: 3, title: "Follow-Up Session Details" },
  ];

  return (
    <View>
      <NutrationMol />
      <CategoriesComp goals={goals} goalsDetails={goalsDetails} />
    </View>
  );
};

export default NutritionOrg;
