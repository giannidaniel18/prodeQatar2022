import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function Bandera({ imgUrl }) {
  return (
    <Image
      src={imgUrl}
      boxSize={{ base: 30, sm: 50 }}
      fallbackSrc="https://via.placeholder.com/150"
      borderRadius={50}
    />
  );
}
