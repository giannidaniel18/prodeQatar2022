import { Box, Text, Stack } from "@chakra-ui/react";
import { memo, useState, useEffect } from "react";
import EquipoBox from "./EquipoBox";
import ResultPicker from "./ResultPicker";
import Bandera from "./Bandera";
import { paises } from "../data/data";

const Enfrentamiento = memo(({ horario, local, visitante, matchId, getMatchPrediction }) => {
  const [teamNames, setTeamNames] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEquipos(local, visitante);
    setLoading(false);
  }, []);

  const getEquipos = (local, visitante) => {
    const localTeam = paises.find((pais) => pais.id === local);
    const visitTeam = paises.find((pais) => pais.id === visitante);

    setTeamNames({ equipoLocal: localTeam, equipoVisitante: visitTeam });
  };

  const handlePrediction = (valor) => {
    const matchPrediction = { match: matchId, resultado: valor };
    getMatchPrediction(matchPrediction);
  };

  return loading ? (
    <Text> cargando...</Text>
  ) : (
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
        <ResultPicker predictionFunction={handlePrediction} />
        <Stack direction={{ base: "row" }}>
          <Bandera imgUrl={teamNames.equipoVisitante?.bandera} />
          <EquipoBox equipo={teamNames.equipoVisitante?.name} />
        </Stack>
      </Stack>
    </Stack>
  );
});

export default Enfrentamiento;
