// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   ImageBackground,
//   Modal,
//   TouchableOpacity,
// } from "react-native";
// import { verticalScale } from "react-native-size-matters";
// import { IMAGES, theme } from "../../../constants";
// import { Typography } from "../../atoms/Typography";

// const ZoomTamplet = () => {
//   const [modalVisible, setModalVisible] = useState(true);
//   const CustomModal = () => {
//     return (
//     //   <Modal animationType="fade" transparent={true} visible={modalVisible}>
//     //     <TouchableOpacity
//     //       onPress={() => setModalVisible(false)}
//     //       style={styles.centeredView}
//     //     >
//     //       <Typography>sadsadasdas</Typography>
//     //     </TouchableOpacity>
//     //   </Modal>

//     <Modal
//     animationType="slide"
//     transparent={true}
//     visible={modalVisible}
//    >
//     <View style={styles.centeredView}>
//       <View style={styles.modalView}>
//         <Typography style={styles.modalText}>Hello World!</Typography>
       
//       </View>
//     </View>
//   </Modal>
//     );

//   };

//   return (
//     <ImageBackground
//       source={IMAGES.onBoardingImg}
//       style={{ width: verticalScale(320), height: "100%" }}

//     >
//         <TouchableOpacity    onPress={() => setModalVisible(true)}>
//             <Typography>asdsadsadsdsadasdasdasd</Typography>
//         </TouchableOpacity>
//       <CustomModal />
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: theme.color.white,
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//   },
// });

// export default ZoomTamplet;




import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text } from "react-native-ui-lib";
import { scale, verticalScale } from "react-native-size-matters";
import { BlurView } from '@react-native-community/blur';
import SafeAreaContainer from "../../../containers/SafeAreaContainer";
import HeaderHome from "../../atoms/HomeAtoms/HeaderHome";
import { IMAGES, theme } from "../../../constants";

const ZoomTamplet = () => {
  return (
      <View style={styles.container}>
        <ImageBackground
          source={IMAGES.onBoardingImg}
          style={styles.imageBackground}
        >
          <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center', // Adjust as needed
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default ZoomTamplet;
