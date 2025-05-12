import React, { useEffect, useState } from "react";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme } from "../../constants";
import HeaderHome from "../../components/atoms/HomeAtoms/HeaderHome";
import { ActivityIndicator, ScrollView } from "react-native";
import HealthCoachingTamplet from "../../components/templates/HealthCoachingTamplet";
import { useDispatch } from "react-redux";
import { MainActions } from "../../redux/actions/MainActions";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native-ui-lib";

const HealthCoaching = () => {
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await dispatch(MainActions.GetAllCategoryData()).then((v) => {
      let status = v.meta.requestStatus;
      if (status == "fulfilled") {
        setLoad(false);
      }
    });
  };

  if (load)
    return (
      <SafeAreaContainer safeArea={false}>
        <View
          style={{
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <ActivityIndicator size={"large"} color={theme.color.primary} />
        </View>
      </SafeAreaContainer>
    );

  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fff" }}
      >
        <HealthCoachingTamplet />
        {/* <HeaderHome color={theme.color.white} abs={true} /> */}
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default HealthCoaching;
