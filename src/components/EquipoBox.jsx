import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function EquipoBox({ equipo, tipo }) {
  return (
    <Stack w={{ base: "auto", md: "250px" }} p={2}>
      <Text fontSize={{ base: 25, md: 30 }}>{equipo}</Text>
    </Stack>
  );
}
