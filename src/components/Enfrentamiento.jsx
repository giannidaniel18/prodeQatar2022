import { Box, Text, Stack } from "@chakra-ui/react";
import { memo, useState } from "react";
import EquipoBox from "./EquipoBox";
import ResultPicker from "./ResultPicker";

const Enfrentamiento = memo(({ hora, local, visitante, matchId, getMatchPrediction }) => {
  const handlePrediction = (valor) => {
    const matchPrediction = { match: matchId, resultado: valor };
    getMatchPrediction(matchPrediction);
  };
  return (
    <Stack direction="row" alignItems={"center"}>
      <Box p={2}>
        <Text fontSize={30}>{hora}</Text>
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        w="100%"
        alignItems={{ base: "center", md: undefined }}
        justifyContent={{ base: undefined, md: "center" }}
        gap={10}
      >
        <EquipoBox equipo={local} />
        <ResultPicker predictionFunction={handlePrediction} />
        <EquipoBox equipo={visitante} />
      </Stack>
    </Stack>
  );
});

export default Enfrentamiento;
