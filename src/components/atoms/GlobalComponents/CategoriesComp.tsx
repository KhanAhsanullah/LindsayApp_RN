import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import { Typography } from "../../atoms/Typography";
import { IMAGES, theme } from "../../../constants";
import HomeDetailMol from "../../molecules/HomeMol/HomeDetailMol";
import FitnessContent from "../HomeAtoms/FitnessContent";

interface Goal {
  id: number;
  title: string;
}

interface CategoriesCompProps {
  goals: Goal[];
  goalsDetails: Goal[];
  showFitnessContent?: boolean;
  showGoalsDetails?: boolean;  
}

const CategoriesComp: React.FC<CategoriesCompProps> = ({
  goals,
  goalsDetails,
  showFitnessContent = false,
  showGoalsDetails = true  
}) => {
  const [selectedId, setSelectedId] = useState<number>(1);

  return (
    <>
      {showFitnessContent && <FitnessContent />}
      
      {goals.map((goal) => (
        <TouchableOpacity
          key={goal.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
          onPress={() => setSelectedId(goal.id)}
        >
          <Image
            source={selectedId === goal.id ? IMAGES.click : IMAGES.circle}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
          <Typography style={{ marginLeft: 10 }}>{goal.title}</Typography>
        </TouchableOpacity>
      ))}

      {showGoalsDetails && goalsDetails.map((detail) => (
        <TouchableOpacity key={detail.id}>
          <View
            spread
            row
            marginV-10
            padding-15
            backgroundColor={theme.color.inputTypeColor}
          >
            <Typography size={theme.fontSize.small}>{detail.title}</Typography>
            <Image
              source={IMAGES.rightIcon}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default CategoriesComp;
