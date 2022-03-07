import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Stores from "../screens/Stores";

const Stack = createStackNavigator();

export default function StoresStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="stores"
        component={Stores}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
