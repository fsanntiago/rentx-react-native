import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { generateInterval } from "./generateInterval";
import { ptBR } from "./localeConfig";

import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface DayProps {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: (data: DayProps) => void;
}

function Calendar({ markedDates, onDayPress }: CalendarProps) {
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
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export { Calendar, DayProps, MarkedDateProps, generateInterval };
