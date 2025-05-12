import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { View } from "react-native-ui-lib";
import { theme } from "../../../constants";
import { Typography } from "../../atoms/Typography";
import { IMAGES } from "../../../constants";

const SubscriptionPackages = () => {
  const [selectedId, setSelectedId] = useState(1);
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

  const SubscriptionCard = ({ item }: any) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        style={[styles.cardStyle, isSelected && styles.selectedCard]}
        onPress={() => setSelectedId(item.id)} 
      >
        <View style={styles.cardContent}>
          <Typography textType="bold" size={theme.fontSize.large}>
            {item.price}
          </Typography>
          <Typography>{item.title}</Typography>
        </View>
        {isSelected && (
          <Image
            source={IMAGES.click}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={SUBSCRIPTION_ITEM}
      renderItem={({ item }) => <SubscriptionCard item={item} />}
      // keyExtractor={(item) => item?.id} 
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: theme.color.inputTypeColor,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: theme.color.inputTypeColor,
  },
  selectedCard: {
    borderColor:theme.color.primary,
  },
  cardContent: {
    flex: 1, 
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default SubscriptionPackages;
