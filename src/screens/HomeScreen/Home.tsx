import React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Text, View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import HomeScreen from "../../components/molecules/HomeMol/HomeScreen";
import { theme } from "../../constants";

const Home = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView>
        <View flex backgroundColor={theme.color.primarybeta} style={{opacity:0.9}}>
          <HomeScreen />
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({});

export default Home;
