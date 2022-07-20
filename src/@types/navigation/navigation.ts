import { StackNavigationProp } from "@react-navigation/stack";
import { CarDTO } from "./../../dtos/carDTO";

type RootStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingComplete: undefined;
  SchedulingDetails: { car: CarDTO; dates: Object };
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
