import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screen/Home";
import { CarDetails } from "../screen/CarDetails";
import { Scheduling } from "../screen/Scheduling";
import { SchedulingComplete } from "../screen/SchedulingComplete";
import { SchedulingDetails } from "../screen/SchedulingDetails";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
    </Navigator>
  );
}
