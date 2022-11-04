import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function EquipoBox({ equipo, tipo }) {
  return (
    <Stack w="250px" direction="row" justifyContent={{ md: tipo === "local" ? "end" : "start" }} p={2}>
      <Text fontSize={30}>{equipo}</Text>
    </Stack>
  );
}
