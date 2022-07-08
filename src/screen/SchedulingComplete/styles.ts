import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: ${getStatusBarHeight() + 18}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: ${RFValue(55)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape_light};
  margin-top: ${RFValue(30)}px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  line-height: ${RFValue(25)}px;
  text-align: center;
  margin-top: 15px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin: ${RFValue(55)}px 0 ${getBottomSpace() + RFValue(55)}px;
`;
