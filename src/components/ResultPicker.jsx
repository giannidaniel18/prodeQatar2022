import { Button, FormControl, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ButtonPicker from "./ButtonPicker";

export default function ResultPicker({ predictionFunction, prediction = null }) {
  const [selection, setSelection] = useState(prediction);

  useEffect(() => {
    setSelection(prediction);
  }, [prediction]);

  const handleChange = (valor) => {
    setSelection(valor);
    predictionFunction(valor);
  };

  return (
    <Stack direction={"row"} justifyContent={"center"}>
      <ButtonPicker value={"local"} text={"L"} selectFunction={handleChange} selection={selection} color="blue" />
      <ButtonPicker value={"empate"} text={"E"} selectFunction={handleChange} selection={selection} color="yellow" />
      <ButtonPicker value={"visitante"} text={"V"} selectFunction={handleChange} selection={selection} color="red" />
    </Stack>
  );
}
