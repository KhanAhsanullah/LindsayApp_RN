import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import { IMAGES } from '../../constants';

const OnBoarding = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <View style={styles.container}>
        <Image
          source={IMAGES.onBoardingImg}
          style={{width: '100%' , height: '50%'}}
          resizeMode="cover"
        />
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default OnBoarding;
