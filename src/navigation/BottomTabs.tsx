import React from "react";
import { View, Text } from "react-native-ui-lib";
import { BOTTOMTABS, theme } from "../constants/Constants";
import { navigate } from "./RootNavigation";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { scale } from "react-native-size-matters";
import { IMAGES, SCREENS } from "../constants";
import { Typography } from "../components/atoms/Typography";

const BottomTabs = (props: any) => {
  return (
    <View style={[styles.tabContainer]}>
      {BOTTOMTABS.map((i, index) => {
        const isActive = i.key == props.state.index;
        return (
          <TouchableOpacity
            style={styles.tabView}
            onPress={() => navigate(i.navigateTo)}
          >
            <Image
              source={i.image}
              style={{ marginVertical:5, width: 26, height: 25 ,tintColor:isActive ? theme.color.primary: theme.color.tgray}}
              resizeMode="contain"
            />
            <Typography size={theme.fontSize.extraVSmall}>{i.title}</Typography>
          </TouchableOpacity>
        );
      })}
      <View
        style={{
          position: "absolute",
          top: scale(-25),
          right: scale(150),
          left: scale(150),
          bottom: scale(0),
        }}
      >
        <TouchableOpacity onPress={() => navigate(SCREENS.ZOOMCALL)}>
          <Image
            source={IMAGES.zoom}
            style={{ width: 55, height: 55 ,marginBottom:30}}
            resizeMode="cover"
          />
                <Typography  size={theme.fontSize.extraVSmall}>Zoom Call</Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: theme.color.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  tabView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom: 0,
    height: 80,
  },
  activeTabView: {
    // flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.primary,
    // padding: 0,
    // height: 70,
    // width: 70,
    // borderRadius: 70 / 2,
    // top: -25,
  },
  tabText: {
    fontSize: 12,
    marginTop: 6,
  },
});

export default BottomTabs;
