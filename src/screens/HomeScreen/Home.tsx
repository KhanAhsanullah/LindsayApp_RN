import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { Text } from 'react-native-ui-lib';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import HomeScreen from '../../components/molecules/HomeMol/HomeScreen';

const Home = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HomeScreen />
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  

});

export default Home;
