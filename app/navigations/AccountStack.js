import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Account from "../screens/account/Account";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cuentas"
        component={Account}
        options={{ title: "Cuenta" }}
      />
    </Stack.Navigator>
  );
}