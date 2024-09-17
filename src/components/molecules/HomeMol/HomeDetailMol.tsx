import React from "react";
import { Typography } from "../../atoms/Typography";
import HomeDetailBottomContent from "../../atoms/HomeAtoms/HomeDetailBottomContent";
import HealthItem from "../../atoms/HomeAtoms/HealthItem";

const HomeDetailMol = () => {
  return (
    <>
        <HomeDetailBottomContent />
        <Typography textType={"semiBold"}>Categories:</Typography>
        <HealthItem />
    </>
  );
};

export default HomeDetailMol;
