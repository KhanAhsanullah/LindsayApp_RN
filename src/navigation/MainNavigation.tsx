import React, { useEffect, useState } from 'react';
import { navigationRef } from './RootNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Workout from '../screens/HomeScreen/Workout';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useSelector((state: any) => state.user);
  
  return (
    <NavigationContainer ref={navigationRef}>
      {/* {!isLoggedIn ? <AuthStackNavigator /> : <AppNavigator />} */}
      <Workout />
    </NavigationContainer>
  );
};

export default MainNavigation;
