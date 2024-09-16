import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { Typography } from "../Typography";
import { theme } from "../../../constants";

const WorkoutSummary = (props: any) => {
  const DATA = [
    { id: 1, title: "Total time", subTitle: "00:45 min" },
    { id: 2, title: "Total calories", subTitle: "120 kcal" },
    { id: 3, title: "Total weight", subTitle: "59kg" },
    { id: 4, title: "Heart rate", subTitle: "115 bmp" },
  ];

  const _renderItem = ({ item }: any) => (
    <View
      style={styles.itemContainer}
    >
      <Typography textType="semiBold" size={theme.fontSize.medium}>
        {item.title}
      </Typography>

      <Typography color={theme.color.primary} size={theme.fontSize.medium}>
        {item.subTitle}
      </Typography>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={_renderItem}
      keyExtractor={(item: any) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 10,
    padding: 20,
    margin: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F9FE",

  },
  listContainer: {
    paddingHorizontal: 10,
  },
});

export default WorkoutSummary;
