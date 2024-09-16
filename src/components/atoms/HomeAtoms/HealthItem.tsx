import React, { useState } from "react";
import {  FlatList, TouchableOpacity } from "react-native";
import { Typography } from "../Typography";
import { theme } from "../../../constants";

const HealthItem = (props: any) => {
  const [selectedId, setSelectedId] = useState(1)
  const DATA = [
    { id: 1, title: "Habits" },
    { id: 2, title: "Goal Setting" },
    { id: 3, title: "Mood Tracker" },
    { id: 4, title: "Programs" },
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
export default HealthItem;
