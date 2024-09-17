import React from "react";
import { Typography } from "../../atoms/Typography";
import HealthItem from "../../atoms/HomeAtoms/HealthItem";
import ContentComp from "../../atoms/GlobalComponents/ContentComp";

const NutrationMol = () => {
  return (
    <>
      <ContentComp
        title="What is Nutritional Coaching?"
        content="Nutritional coaching holds paramount importance in our quest for better health and well-being. It serves as a compass, guiding individuals toward informed dietary choices and a sustainable relationship with food."
      />
      <Typography textType={"semiBold"}>Categories:</Typography>
      <HealthItem />
    </>
  );
};

export default NutrationMol;
