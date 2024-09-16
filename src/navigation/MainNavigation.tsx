import React, { useEffect, useState } from 'react';
import { navigationRef } from './RootNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { AuthStackNavigator } from './AuthStackNavigator';
import ExerciseDetail from '../screens/HomeScreen/ExerciseDetail';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useSelector((state: any) => state.user);
  
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {!isLoggedIn ? <AuthStackNavigator /> : <AppNavigator />} */}
      <ExerciseDetail />
    </NavigationContainer>
  );
};

export default MainNavigation;
