import React, { useState } from "react";
import {  TouchableOpacity } from "react-native";
import { Typography } from "../Typography";
import { theme } from "../../../constants";

const HorizentalItem = (props: any) => {
  const [selectedId, setSelectedId] = useState(1)
  const DATA = [
    { id: 1, title: "Cardio" },
    { id: 2, title: "Legs" },
    { id: 3, title: "Back" },
    { id: 4, title: "Chest" },
  ];

  return (
    <FlatList
      data={DATA}
      renderItem={({ item }: any) => (
        <TouchableOpacity
          onPress={() => setSelectedId(item.id)}
          style={{
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            margin: 10,
            backgroundColor:
              selectedId === item.id
                ? theme.color.primarybeta
                : theme.color.secondry,
          }}
        >
          <Typography
            textType="semiBold"
            size={theme.fontSize.extraSmall12}
            color={
              selectedId === item.id ? theme.color.white : theme.color.black
            }
          >
            {item.title}
          </Typography>
        </TouchableOpacity>
      )}
      keyExtractor={(item: any) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};
export default HorizentalItem;
