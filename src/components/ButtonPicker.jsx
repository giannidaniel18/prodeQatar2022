import { Button } from "@chakra-ui/react";
import React from "react";

export default function ButtonPicker({ selection, value, selectFunction, text, color }) {
  const onSelect = (e) => {
    selectFunction(e.target.value);
  };

  return (
    <Button borderRadius={20} value={value} colorScheme={selection === value ? color : undefined} onClick={onSelect}>
      {text}
    </Button>
  );
}
