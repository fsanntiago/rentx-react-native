import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const CentralContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  width: 90%;
  border-radius: 5px;
  padding: 24px;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
`;
