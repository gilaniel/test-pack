import { Box, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { CheckBoxProps } from "./CheckBox.types";
import { CheckStyles, RadioStyles } from "./styles";

export const CheckBox: React.FC<CheckBoxProps> = () => {
  const id = String(Math.random() * 10).substring(0, 4);

  return (
    <Box sx={CheckStyles}>
      <Input id={"d" + id} type="checkbox" sx={{ border: "none" }} />
      <FormLabel htmlFor={"d" + id} size="body2" fontWeight={400}>
        <Box as="span"></Box>
        Off with your head
      </FormLabel>
    </Box>
  );
};

export const RadioInp: React.FC<CheckBoxProps> = ({ value }) => {
  const id = String(Math.random() * 10).substring(0, 4);

  return (
    <Box sx={RadioStyles}>
      <Input type="radio" id={"d" + id} value={value} sx={{ border: "none" }} />
      <FormLabel htmlFor={"d" + id} size="body2" fontWeight={400}>
        <Box as="span"></Box>
        Off with your head
      </FormLabel>
    </Box>
  );
};
