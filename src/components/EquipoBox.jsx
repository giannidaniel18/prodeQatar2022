import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function EquipoBox({ equipo, status }) {
  return (
    <Stack w="250px" alignItems="center" p={2}>
      <Text fontSize={30}>{equipo}</Text>
    </Stack>
  );
}
