import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Bandera from "./Bandera";

export default function EquipoBox({ equipo, status }) {
  return (
    <Stack w="250px" direction="row" alignItems="center" p={2}>
      <Text fontSize={30}>{equipo}</Text> <Bandera/>
    </Stack>
  );
}
