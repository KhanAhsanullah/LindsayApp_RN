import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {BOTTOMTABS, theme} from '../constants/Constants';
import {navigate} from './RootNavigation';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import { scale } from "react-native-size-matters";
import { IMAGES, SCREENS } from "../constants";

const BottomTabs = (props: any) => {
  return (
    <View style={[styles.tabContainer, []]}>
      {BOTTOMTABS.map((i, index) => {
        const isActive = i.key == props.state.index;
        return (
          <TouchableOpacity
            style={styles.tabView}
            onPress={() => navigate(i.navigateTo)}
          >
            <Image
              source={i.image}
              style={{ width: 22, height: 22 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
      <View
        style={{
          position: "absolute",
          top: scale(-15),
          right: scale(150),
          left: scale(150),
          bottom: scale(0),
        }}
      >
        <TouchableOpacity
          style={{
            width: scale(50),
            height: scale(50),
            borderWidth: 1,
            borderRadius: scale(25),
            backgroundColor: "#000",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigate(SCREENS.ZOOMCALL)}
        >
          <Image
              source={IMAGES.avatar}
              style={{ width: 22, height: 22 }}
              resizeMode="contain"
            />
          {/* <Icon
            name={"star"}
            vector={"Entypo"}
            size={35}
            color={theme.color.white}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: theme.color.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  tabView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0,
    height: 80,
  },
  activeTabView: {
    // flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
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
