import { Box, Text, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import EquipoBox from "./EquipoBox";
import ResultPicker from "./ResultPicker";
import Bandera from "./Bandera";
import { predicciones } from "../data/data";

const Enfrentamiento = ({ horario, teamNames, id, getMatchPrediction }) => {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    setPrediction(predicciones.predicciones.find((predict) => predict.partido === id)?.resultado);
  }, []);

  const handlePrediction = (valor) => {
    const matchPrediction = { match: id, resultado: valor };
    getMatchPrediction(matchPrediction);
  };

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent={{ base: "center" }}
      alignItems={{ base: "start", md: "center" }}
    >
      <Box p={2}>
        <Text fontSize={30}>{horario}</Text>
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
          <EquipoBox equipo={teamNames.equipoLocal?.name} />
          <Bandera imgUrl={teamNames.equipoLocal?.bandera} />
        </Stack>
        <ResultPicker predictionFunction={handlePrediction} prediction={prediction} />
        <Stack direction={{ base: "row" }} alignItems={{ base: "center" }}>
          <Bandera imgUrl={teamNames.equipoVisitante?.bandera} />
          <EquipoBox equipo={teamNames.equipoVisitante?.name} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Enfrentamiento;
