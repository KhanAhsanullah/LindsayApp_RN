// import React from "react";
// import {  theme } from "../../constants";
// import { Image, View } from "react-native-ui-lib";
// import { scale, verticalScale } from "react-native-size-matters";
// import { Typography } from "../atoms/Typography";
// import { Dimensions, ImageSourcePropType, Text } from "react-native";

// interface OnBoardingTampletProps {
//   title: string;
//   image: ImageSourcePropType;
//   description: string;
// }
// const { width } = Dimensions.get("window");
// export const OnBoardingTamplet = (props: OnBoardingTampletProps) => {
//   const { title = "", image = {}, description = "" } = props;

//   return (
//     <View marginV-100 width={width}>
//       <Image
//         source={image}
//         style={{
//           width: width,
//           height: verticalScale(200),
//         }}
//         resizeMode="cover"
//       />
//       <View marginH-20 marginV-50 flex>
//       <View style={{ width: 60, height: 2, borderWidth: 1 ,borderColor:theme.color.primary}} />
//       <Typography style={{marginVertical:10}} size={theme.fontSize.large24} textType="bold">{title}</Typography>
//       <Typography style={{flex:1}} color={theme.color.descColor} width={10} size={theme.fontSize.extraSmall}>{description}</Typography>

//     </View>
//     </View>
//   );
// };

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, theme } from "../../constants";
import LinearGradient from "react-native-linear-gradient";
import { OnBeardingContent } from "../molecules/OnBeardingContent";
import { OnBeardingTopCont } from "../atoms/OnBoardingAtoms/OnBeardingTopCont";

const OnBoardingTamplet = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={[theme.color.primary, theme.color.cyan]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <OnBeardingTopCont />
        <OnBeardingContent />
      </LinearGradient>
    </SafeAreaContainer>
  );
};

export default OnBoardingTamplet;
