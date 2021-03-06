import React, { useEffect, useState } from "react";
import { Alert, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";

import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationProps } from "../../@types/navigation/navigation";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";
import { CustomAlert } from "../../components/CustomAlert";

import { CarDTO } from "../../dtos/carDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { getPlatformDate } from "../../utils/getPlatformDate";

import api from "../../services/api";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer,
} from "./styles";

interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentalPeriod {
  start: string;
  end: string;
}

export function SchedulingDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const [closeAlert, setCloseAlert] = useState(false);

  const theme = useTheme();
  const { navigate, goBack } = useNavigation<NavigationProps>();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(car.rent.price * dates.length);

  function handleCloseAlert() {
    setCloseAlert(!closeAlert);
    handleGoBack();
  }

  async function handleConfirmRental() {
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const dateSchedules = dates.some(date =>
      schedulesByCar.data.unavailable_dates.includes(date)
    );

    if (dateSchedules) {
      return setCloseAlert(!closeAlert);
    }

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(response => navigate("SchedulingComplete"))
      .catch(() => Alert.alert("N??o foi poss??vel confirmar o agendamento."));
  }

  function handleGoBack() {
    goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  return (
    <Container>
      <StatusBar style="dark" />

      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Ionicons
              name="calendar"
              size={24}
              color={theme.colors.shape_light}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>de</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Ionicons
            name="chevron-forward-outline"
            color={theme.colors.text_detail}
            size={10}
          />

          <DateInfo>
            <DateTitle>at??</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} x{dates.length} di??rias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>

      <Modal transparent visible={closeAlert} animationType="fade">
        <CustomAlert
          titleButton={"OK"}
          message={"Datas indispon??veis."}
          onPress={handleCloseAlert}
        />
      </Modal>
    </Container>
  );
}
