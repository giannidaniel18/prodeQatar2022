import React, { useEffect, useState } from "react";
import { Container, Divider, HStack, Stack, Text, VStack } from "@chakra-ui/react";

import { paises, instancias } from "../../data/data";
import Enfrentamiento from "../Enfrentamiento";

export default function Fecha({ instancia }) {
  // const enfrentamientos = instancias.filter((i) => i.nombre === instancia);
  const [enfrentamientos, setEnfrentamientos] = useState([]);
  const [predictionArray, setPredictionArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEnfrentamientos(instancias.find((i) => i.id === instancia).enfrentamientos);
    setLoading(false);
  }, [instancia]);

  const buildPredicitons = (matchPrediction) => {
    const newMatchPrediction = matchPrediction;
    // const index = predictionArray.map((i) => i.match).indexOf(newMatchPrediction.match);
    const index = predictionArray.findIndex((prediction) => prediction.match === matchPrediction.match);
    console.log(index);
    if (index === -1) {
      setPredictionArray([...predictionArray, newMatchPrediction]);
    } else {
      predictionArray.splice(index, 1, newMatchPrediction);
    }
    console.log(predictionArray);
  };
  return (
    <div>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <Stack alignItems={"center"}>
          {enfrentamientos.map((grupo) => (
            <Stack key={grupo.id_grupo} border="0.5px solid" borderRadius={5} p={2} my={2} w={"full"} maxW={"90%"}>
              <Text>{grupo.name_grupo}</Text>
              {grupo.enfrentamientos.map((enfrentamiento) => (
                <Stack key={enfrentamiento.id}>
                  <Enfrentamiento {...enfrentamiento} getMatchPrediction={buildPredicitons} />
                  <Divider />
                </Stack>
              ))}
            </Stack>
          ))}
        </Stack>
      )}
    </div>
  );
}
