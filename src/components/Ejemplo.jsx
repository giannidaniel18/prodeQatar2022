import { Button, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Caja() {
  const [color, setColor] = useState("");

  const funcionCambiadoraDeColor = (color) => {
    setColor(color);
  };

  return (
    <Stack>
      <Text color={color}> TEXTO A CAMBIAR</Text>
      <Botoncito texto="rojo" valor={"red"} funcionCambiadora={funcionCambiadoraDeColor} />
      <Botoncito texto="azul" valor={"blue"} funcionCambiadora={funcionCambiadoraDeColor} />
      <Botoncito texto="verde" valor={"green"} funcionCambiadora={funcionCambiadoraDeColor} />
    </Stack>
  );
}

//---------------------------------------------------------------------------------------------------------------------------

const Botoncito = ({ texto, valor, funcionCambiadora }) => {
  const funcionSeleccionadoraDeColor = (e) => {
    funcionCambiadora(e.target.value);
  };

  return (
    <Button value={valor} onClick={funcionSeleccionadoraDeColor}>
      {texto}
    </Button>
  );
};
