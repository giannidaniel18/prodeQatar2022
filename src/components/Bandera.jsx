import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function Bandera({ imgUrl }) {
  return <Image objectFit="cover" boxSize="50px" borderRadius={50} src={imgUrl} alt="" />;
}
