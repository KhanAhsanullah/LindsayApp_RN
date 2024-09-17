import React, { useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { Switch, Text, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, SCREENS, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";
import { navigate } from "../../../navigation/RootNavigation";

const ProfileList = (props: any) => {
  const { onPress } = props;

  const [toggleState, setToggleState] = useState(true);

  const DATA = [
    { id: 1, title: "Edit Profile", image: IMAGES.pr1 ,navigateTo:''},
    { id: 2, title: "Notifications", image: IMAGES.pr2,navigateTo:'' },
    { id: 3, title: "Subscription", image: IMAGES.pr3,navigateTo:SCREENS.SUBSCRIPTION },
    { id: 4, title: "Order Placed", image: IMAGES.pr4,navigateTo:'' },
    { id: 5, title: "Delete Account", image: IMAGES.pr5,navigateTo:'' },
    { id: 6, title: "Logout", image: IMAGES.pr6,navigateTo:'' },
  ];

  const _renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity onPress={() => navigate(item.navigateTo)}>
        <View row marginV-20>
          <Image
            source={item.image}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
          <View marginL-20 flex>
            <View row spread>
              <Typography size={theme.fontSize.medium}>
                {item.title}
              </Typography>
              {index === 1 ? (
                <Switch
                  value={toggleState}
                  onValueChange={(value) => setToggleState(value)}
                  onColor={theme.color.primary}
                  
                />
              ) : (
                <Image source={IMAGES.rightIcon} style={{ width: 15, height: 15 }} />
              )}
            </View>
          </View>
        </View>
        <View style={commonStyles.lineBar} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={_renderItem}
      keyExtractor={(item: any) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ProfileList;
