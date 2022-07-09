import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";

import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";

import { NavigationProps } from "../../@types/navigation/navigation";

import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";

export function Home() {
  const { navigate } = useNavigation<NavigationProps>();

  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png",
  };

  function handleCarDetails() {
    navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
