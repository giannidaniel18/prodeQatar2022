import { ChakraProvider, Container, Divider, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Enfrentamiento from "./components/Enfrentamiento";
import { paises, grupos } from "./data/data";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [predictionArray, setPredictionArray] = useState([]);

  const buildPredicitons = (matchPrediction) => {
    const newMatchPrediction = matchPrediction;
    setPredictionArray([...predictionArray, newMatchPrediction]);
  };

  return (
    <ChakraProvider>
      <NavBar />
      <Stack alignItems={"center"}>
        {grupos.map((grupo) => (
          <Stack key={grupo.id_grupo} border="0.5px solid" borderRadius={5} p={2} my={2} w={"full"} maxW={"90%"}>
            <Text>{grupo.name_grupo}</Text>
            {grupo.enfrentamientos.map((enfrentamiento) => (
              <Stack key={enfrentamiento.id}>
                <Enfrentamiento
                  hora="18:00"
                  fecha="22/11/2022"
                  local={enfrentamiento.local}
                  visitante={enfrentamiento.visitante}
                  matchId={enfrentamiento.id}
                  getMatchPrediction={buildPredicitons}
                />
                <Divider />
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </ChakraProvider>
  );
}

export default App;
