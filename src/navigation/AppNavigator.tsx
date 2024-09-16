import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "../constants";
import Home from "../screens/HomeScreen/Home";
import BottomTabs from "./BottomTabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Exercise from "../screens/HomeScreen/Exercise";
import ZoomCall from "../screens/HomeScreen/ZoomCall";
import Notification from "../screens/HomeScreen/Notification";
import Profile from "../screens/HomeScreen/Profile";
import ExerciseDetail from "../screens/HomeScreen/ExerciseDetail";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return(
  <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
     <Stack.Screen name={SCREENS.HOME} component={BottomTabNavigation} />
     <Stack.Screen name={SCREENS.EXERCISE_DETAIL} component={ExerciseDetail} />
  

     
    </Stack.Navigator>
)}

const BottomTabNavigation = (props: any) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME}
      tabBar={(e: any) => <BottomTabs {...e} {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={SCREENS.HOME} component={Home} />
      <Tab.Screen name={SCREENS.EXERCISE} component={Exercise} />
      <Tab.Screen name={SCREENS.ZOOMCALL} component={ZoomCall} />
      <Tab.Screen name={SCREENS.NOTIFICATION} component={Notification} />
      <Tab.Screen name={SCREENS.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};


export default AppNavigator;
