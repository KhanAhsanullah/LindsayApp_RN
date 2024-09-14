import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { Text } from 'react-native-ui-lib';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import HomeScreen from '../../components/molecules/HomeMol/HomeScreen';
import { Typography } from '../../components/atoms/Typography';

const Profile = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <Typography>Profile</Typography>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  

});

export default Profile;
