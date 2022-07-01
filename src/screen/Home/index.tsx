import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";

import { Container, Header, HeaderContent, TotalCars } from "./styles";

export function Home() {
  const carDataOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png",
  };

  const carDataTwo = {
    brand: "Porsche",
    name: "Panamera",
    rent: {
      period: "Ao dia",
      price: 340,
    },
    thumbnail:
      "https://www.webmotors.com.br/imagens/prod/347515/PORSCHE_PANAMERA_4.0_V8_EHYBRID_TURBO_S_PDK_34751515315528750.webp?s=fill&w=130&h=97&q=70&t=true)",
  };

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carDataOne} />
      <Car data={carDataTwo} />
    </Container>
  );
}
