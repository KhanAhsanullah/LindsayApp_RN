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
import Workout from "../screens/HomeScreen/Workout";
import WorkoutResult from "../screens/HomeScreen/WorkoutResult";
import HealthCoaching from "../screens/HomeScreen/HealthCoaching";
import FitnessDetail from "../screens/HomeScreen/FitnessDetail";
import NutrtionDetail from "../screens/HomeScreen/NutrtionDetail";
import Subscription from "../screens/HomeScreen/SubscriptionScreen/Subscription";
import PaymentMethod from "../screens/HomeScreen/SubscriptionScreen/PaymentMethod";
import GoalDetails from "../screens/HomeScreen/GoalDetails";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return(
  <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
     <Stack.Screen name={SCREENS.HOME} component={BottomTabNavigation} />
     <Stack.Screen name={SCREENS.EXERCISE_DETAIL} component={ExerciseDetail} />
     <Stack.Screen name={SCREENS.WORKOUT} component={Workout} />
     <Stack.Screen name={SCREENS.WORKOUT_RESULT} component={WorkoutResult} />
     <Stack.Screen name={SCREENS.HEALTH_COACHING} component={HealthCoaching} />
     <Stack.Screen name={SCREENS.FITNESS_DETAIL} component={FitnessDetail} />
     <Stack.Screen name={SCREENS.NUTRITION_DETAIL} component={NutrtionDetail} />
     <Stack.Screen name={SCREENS.GOAL_DETAILS} component={GoalDetails} />

     <Stack.Screen name={SCREENS.SUBSCRIPTION} component={Subscription} />
     <Stack.Screen name={SCREENS.PAYMENT_METHOD} component={PaymentMethod} />

  

     
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
