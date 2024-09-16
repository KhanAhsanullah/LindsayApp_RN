import React, { useState } from "react";
import HomeDetailMol from "../../molecules/HomeMol/HomeDetailMol";
import { Typography } from "../../atoms/Typography";
import { Image, TouchableOpacity } from "react-native";
import { IMAGES, theme } from "../../../constants";
import { View } from "react-native-ui-lib";

const HealthCoachingOrg = () => {
  const [selectedId, setSelectedId] = useState(1);
  const GOALS = [
    { id: 1, title: "SMART Goals Framework" },
    { id: 2, title: "Goal Progress Visualization" },
    { id: 3, title: "Milestone Celebrations" },
    { id: 4, title: "Goal Achievement History" },
    { id: 5, title: "Integration with Fitness and Nutrition Goals" },
  ];
  const GOALS_DETAILS = [
    { id: 1, title: "Health Coaching Packages and Pricing" },
    { id: 2, title: "Available Health Coaching Packages" },
    { id: 3, title: "MAvailable Health Coaching Packages" },
  ];
  return (
    <>
      <HomeDetailMol />
      {GOALS.map((i) => {
        return (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
            onPress={() => setSelectedId(i.id)}
          >
            <Image
              source={selectedId === i.id ? IMAGES.click : IMAGES.circle}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
            <Typography style={{ marginLeft: 10 }}>{i.title}</Typography>
          </TouchableOpacity>
        );
      })}

      {GOALS_DETAILS.map((i) => {
        return (
          <TouchableOpacity>
            <View
              spread
              row
              marginV-10
              padding-15
              backgroundColor={theme.color.inputTypeColor}
             
            >
              <Typography size={theme.fontSize.small}>{i.title}</Typography>
              <Image
                source={IMAGES.rightIcon}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default HealthCoachingOrg;
