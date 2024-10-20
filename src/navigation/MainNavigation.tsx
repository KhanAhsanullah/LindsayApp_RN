import React, { useEffect, useState } from 'react';
import { navigationRef } from './RootNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Workout from '../screens/HomeScreen/Workout';
import { AuthStackNavigator } from './AuthStackNavigator';
import AppNavigator from './AppNavigator';
import Subscription from '../screens/HomeScreen/SubscriptionScreen/Subscription';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { States } from '../utils/types';
import { LoaderScreen, Toast } from 'react-native-ui-lib';
import { theme } from '../constants';
import { showHideToast } from '../redux/slices/OtherSlice';
import { moderateScale } from 'react-native-size-matters';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: States) => state.Auth);
  const { toast, loading } = useSelector((state: States) => state.Others);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? 'height' : undefined}>
      <NavigationContainer ref={navigationRef}>
        {!isLoggedIn ? <AuthStackNavigator /> : <AppNavigator />}
      </NavigationContainer>
      <Toast
        {...toast}
        autoDismiss={2000}
        backgroundColor={theme.color.primary}
        swipeable
        onDismiss={() => {
          dispatch(
            showHideToast({
              visible: false,
            }),
          );
        }}
      />
      {loading && (
        <LoaderScreen
          loaderColor={theme.color.primary}
          message="Loading"
          messageStyle={{
            fontSize: moderateScale(theme.fontSize.regular),
            fontFamily: theme.font.medium,
          }}
          size={60}
          containerStyle={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(255,255,255,0.4)',
          }}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default MainNavigation;
