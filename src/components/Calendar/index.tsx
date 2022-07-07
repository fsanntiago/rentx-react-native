import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul.",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt-br";

export function Calendar() {
  const theme = useTheme();

  return (
    <CustomCalendar
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.line,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      renderArrow={direction => (
        <Ionicons
          name={
            direction === "left"
              ? "chevron-back-outline"
              : "chevron-forward-outline"
          }
          size={24}
          color={theme.colors.text}
        />
      )}
      theme={{
        textDayHeaderFontFamily: theme.fonts.secondary_600,
        textDayHeaderFontSize: 12,
        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        textDayStyle: {
          fontFamily: theme.fonts.primary_400,
          fontSize: 15,
          color: theme.colors.title,
        },
        arrowStyle: { marginHorizontal: -15 },
      }}
      firstDay={1}
      minDate={new Date().toDateString()}
    />
  );
}
