import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Button } from "../Button";

import { Container, CentralContainer, Header, Message, Footer } from "./styles";

interface Props extends RectButtonProps {
  titleButton: string;
  message: string;
  colorButton?: string;
  onPress: () => void;
}

export function CustomAlert({
  titleButton,
  message,
  colorButton,
  ...rest
}: Props) {
  return (
    <Container>
      <CentralContainer>
        <Header>
          <Message>{message}</Message>
        </Header>

        <Button title={titleButton} color={colorButton} {...rest} />
      </CentralContainer>
    </Container>
  );
}
