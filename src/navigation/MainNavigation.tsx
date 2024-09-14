// import React, {useEffect, useState} from 'react';
// import {navigationRef} from './RootNavigation';
// import {useDispatch, useSelector} from 'react-redux';
// import Splash from '../containers/Splash';
// import {NavigationContainer} from '@react-navigation/native';
// import AppNavigator from './AppNavigator';
// import { AuthStackNavigator } from './AuthStackNavigator';
// import Login from '../screens/AuthScreen/Login';

// const MainNavigation = () => {
//   const dispatch = useDispatch();
//   const [isloading, setIsLoadings] = useState(true);
//   const {isLoggedIn} = useSelector((state: any) => state.user);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoadings(false);
//     }, 3000);
//   }, []);

//   return isloading ? (
//     <Splash />
//   ) : (
//     <>
//       <NavigationContainer ref={navigationRef}>
//         {!isLoggedIn ? <AuthStackNavigator /> : <AppNavigator />}
//       </NavigationContainer>
//     </>
//   );
// };

// export default MainNavigation;




import React, { useEffect, useState } from 'react';
import { navigationRef } from './RootNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { AuthStackNavigator } from './AuthStackNavigator';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useSelector((state: any) => state.user);

  useEffect(() => {
    const checkAuthStatus = async () => {
    
      // Simulating a delay
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    checkAuthStatus();
  }, [dispatch]);

  if (isLoading) {
    return null; 
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {!isLoggedIn ? <AuthStackNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
