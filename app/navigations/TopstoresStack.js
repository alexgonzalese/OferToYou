import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Topstores from "../screens/Topstores";

const Stack = createStackNavigator();

export default function TopstoresStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="topstores"
        component={Topstores}
        options={{ title: "Top Tiendas" }}
      />
    </Stack.Navigator>
  );
}
