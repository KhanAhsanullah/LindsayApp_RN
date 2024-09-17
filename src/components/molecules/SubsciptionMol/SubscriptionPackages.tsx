import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import { theme } from "../../../constants";
import { Typography } from "../../atoms/Typography";

const SubscriptionPackages = () => {
  const SUBSCRIPTION_ITEM = [
    {
      id: 1,
      title: "Per Horse Per Month",
      price: "$10",
    },
    {
      id: 2,
      title: "Unlimited Horses Per Month",
      price: "$50",
    },
    {
      id: 3,
      title: "Unlimited Horses Per Month",
      price: "$100",
    },
  ];
  const SubscriptionCard = ({ item, index }: any) => {
    return (
      <View
        style={styles.cardStyle}
        // onPress={() => {
        //   setVisible(true);
        // }}
      >
        <Typography>{item.price}</Typography>
        <Typography>{item.title}</Typography>
      </View>
    );
  };

  return (
    <FlatList
      data={SUBSCRIPTION_ITEM}
      renderItem={({ item }) => <SubscriptionCard item={item} />}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
    cardStyle:{
        borderRadius: 10,
        borderWidth: 1,
        padding: 20,
        backgroundColor: theme.color.inputTypeColor,
        marginVertical:10
    }
});

export default SubscriptionPackages;
