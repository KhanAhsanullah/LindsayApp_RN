import React from "react";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import DrawerTitle from "../../components/atoms/DrawerTitle";
import ExerciseMol from "../../components/molecules/ExerciseMol";
import { Image, TouchableOpacity } from "react-native";
import { onBack } from "../../navigation/RootNavigation";
import { commonStyles } from "../../globalStyle";
import { Typography } from "../../components/atoms/Typography";

const Workout = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <HeaderHome color={theme.color.primary} />
      <View margin-20>
        <TouchableOpacity onPress={() => onBack()}>
          <Image
            source={IMAGES.leftIconWithColor}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
      <View style={commonStyles.footerContainer}>
        <Typography
          align="center"
          textType="semiBold"
          style={{marginVertical:20}}
          size={theme.fontSize.large20}
        >
          Stretching Workout{"\n"}Length
        </Typography>
      </View>
    </SafeAreaContainer>
  );
};

export default Workout;
