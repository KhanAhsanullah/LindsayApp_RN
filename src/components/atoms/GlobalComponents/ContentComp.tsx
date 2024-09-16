import React from "react";
import { View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { theme } from "../../../constants";

interface ContentComp {
  title: string;
  content: string;
}

const ContentComp: React.FC<ContentComp> = ({ title, content }) => {
  return (
    <View marginV-20>
      <Typography align="center" textType="bold" size={theme.fontSize.large20}>
        {title}
      </Typography>
      <Typography color={theme.color.descColor} size={theme.fontSize.extraSmall12}>
        {content}
      </Typography>
    </View>
  );
};

export default ContentComp;
