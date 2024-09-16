import React, { useState } from "react";
import {  FlatList, TouchableOpacity, Image } from "react-native";
import { View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";

const VerticalItem = (props: any) => {
  const { onPress } = props;
  const DATA = [
    { id: 1, title: "Exercises with Jumping Rope", image: IMAGES.ex1 },
    { id: 2, title: "Exercises with Holding Jumping Rope", image: IMAGES.ex2 },
    { id: 3, title: "Exercises with Sitting Dumbbells", image: IMAGES.ex3 },
    { id: 4, title: "Body weight cardio", image: IMAGES.ex4 },
  ];
  const _renderItem = ({ item }: any) => {
    return (
      <>
        <TouchableOpacity onPress={onPress}>
          <View row marginV-20>
            <Image
              source={item.image}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
            <View marginL-20>
              <Typography textType={"semiBold"}>{item.title}</Typography>
              <View row>
                <View row center>
                  <Image
                    source={IMAGES.calories}
                    style={{ width: 15, height: 15 }}
                    resizeMode="contain"
                  />
                  <Typography style={{marginLeft:10}}>110 kcal</Typography>
                </View>
                <View  style={{height:15,borderWidth:1,marginHorizontal:15,borderColor:'#707070',alignSelf:"center"}}/>
                <View row center>
                  <Image
                    source={IMAGES.clock}
                    style={{ width: 15, height: 15 }}
                    resizeMode="contain"
                  />
                  <Typography style={{marginLeft:10}}>10 min</Typography>
                </View>
              </View>
              <Typography size={theme.fontSize.extraSmall12}>Beginner</Typography>
            </View>
          </View>
          <View style={commonStyles.lineBar}/>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={_renderItem}
      keyExtractor={(item: any) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default VerticalItem;
