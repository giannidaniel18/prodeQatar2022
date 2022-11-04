import { Box, Text, Stack } from "@chakra-ui/react";
import { memo, useState } from "react";
import EquipoBox from "./EquipoBox";
import ResultPicker from "./ResultPicker";
import Bandera from "./Bandera";

const Enfrentamiento = memo(({ hora, local, visitante, matchId, getMatchPrediction }) => {
  const handlePrediction = (valor) => {
    const matchPrediction = { match: matchId, resultado: valor };
    getMatchPrediction(matchPrediction);
  };
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent={{ base: "center" }}
      alignItems={{ base: "start", md: "center" }}
    >
      <Box p={2}>
        <Text fontSize={30}>{hora}</Text>
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        w="100%"
        alignItems={{ base: "center", md: undefined }}
        justifyContent={{ base: undefined, md: "center" }}
        gap={{ base: 5, md: 10 }}
      >
        <Stack
          alignItems={{ base: "center" }}
          direction={{ base: "row-reverse", md: "row" }}
          textAlign={{ base: "start", md: "end" }}
        >
          <EquipoBox equipo={local} />
          <Bandera />
        </Stack>
        <ResultPicker predictionFunction={handlePrediction} />
        <Stack direction={{ base: "row" }}>
          <Bandera />
          <EquipoBox equipo={visitante} />
        </Stack>
      </Stack>
    </Stack>
  );
});

export default Enfrentamiento;
