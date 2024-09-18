import React from "react";
import {
  StatusBar,
  View,
  SafeAreaView,
  Platform,
  useColorScheme,
} from "react-native";
import { theme } from "../constants";

const SafeAreaContainer = (props: any) => {
  const {
    safeArea = true,
    backgroundColor = "transparent",
    style = {},
  } = props;

  const colorScheme = useColorScheme();

  const isDarkMode = colorScheme === "dark";
  const statusBarMode = isDarkMode ? "light-content" : "dark-content";
  const statusBarBgColor = isDarkMode ? "black" : "white";

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <StatusBar
        translucent={true}
        backgroundColor={statusBarBgColor}
        barStyle={statusBarMode}
      />
      <View style={{ height: 35, backgroundColor: theme.color.primarybeta }} />

      {safeArea ? (
        <SafeAreaView
          style={{
            flex: 1,
            //paddingTop: Platform.OS === "ios" ? 50 : 0,
            ...style,
          }}
        >
          {props.children}
        </SafeAreaView>
      ) : (
        <>{props.children}</>
      )}
    </View>
  );
};

export default SafeAreaContainer;
