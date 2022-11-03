import { Button, FormControl, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ButtonPicker from "./ButtonPicker";

export default function ResultPicker({ predictionFunction }) {
  const [selection, setSelection] = useState(null);

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
