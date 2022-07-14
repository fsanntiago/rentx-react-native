import { StackNavigationProp } from "@react-navigation/stack";
import { CarDTO } from "./../../dtos/carDTO";

type RootStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: undefined;
  SchedulingComplete: undefined;
  SchedulingDetails: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
