import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { instancias } from "../../data/data";
import Enfrentamiento from "../Enfrentamiento";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { usePaises } from "../../hooks/usePaises";
import EnfrentamientoContainer from "../../pages/EnfrentamientoContainer";

const GRUPOS = [
  { idGrupo: "1", titulo: "GRUPO A" },
  { idGrupo: "2", titulo: "GRUPO B" },
  { idGrupo: "3", titulo: "GRUPO C" },
  { idGrupo: "4", titulo: "GRUPO D" },
  { idGrupo: "5", titulo: "GRUPO E" },
  { idGrupo: "6", titulo: "GRUPO F" },
  { idGrupo: "7", titulo: "GRUPO G" },
  { idGrupo: "8", titulo: "GRUPO H" },
];

export default function Fecha({ instancia }) {
  // const enfrentamientos = instancias.filter((i) => i.nombre === instancia);
  const [enfrentamientos, setEnfrentamientos] = useState([]);
  const [predictionArray, setPredictionArray] = useState([]);
  const [grupoToShow, setGrupoToShow] = useState([]);
  const { paises, loading } = usePaises();

  useEffect(() => {
    if (instancia === "grupos") {
      setEnfrentamientos(instancias.find((i) => i.id === instancia).enfrentamientos);
    }
    setGrupoToShow(instancias.find((i) => i.id === instancia).enfrentamientos);
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

  const onChangeGroupToShow = (e) => {
    setGrupoToShow(enfrentamientos.filter((enfrentamiento) => enfrentamiento.id_grupo === e.target.value));
  };

  return (
    <div>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <Stack spacing={5}>
          {instancia === "grupos" && (
            <>
              <Box w={"50px"}>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Grupos
                  </MenuButton>
                  <MenuList>
                    {GRUPOS.map((grupo) => (
                      <MenuItem key={grupo.idGrupo} value={grupo.idGrupo} onClick={onChangeGroupToShow}>
                        {grupo.titulo}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Box>
            </>
          )}
          <Stack alignItems={"center"}>
            {grupoToShow.map((grupo) => (
              <Stack key={grupo.id_grupo} border="0.5px solid" borderRadius={5} p={2} my={2} w={"full"} maxW={"90%"}>
                <Text>{grupo.name_grupo}</Text>
                {grupo.enfrentamientos.map((enfrentamiento) => (
                  <Stack key={enfrentamiento.id}>
                    <EnfrentamientoContainer
                      {...enfrentamiento}
                      getMatchPrediction={buildPredicitons}
                      paises={paises}
                    />
                    <Divider />
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
          <Button w={"fit-content"}>Cargar Resultados</Button>
        </Stack>
      )}
    </div>
  );
}
