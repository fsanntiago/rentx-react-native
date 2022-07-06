import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { useTheme } from "styled-components";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <Ionicons
        name="chevron-back"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
