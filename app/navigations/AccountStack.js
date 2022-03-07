import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Account from "../screens/account/Account";
import Login from "../screens/account/Login";
import Register from "../screens/account/Register";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cuentas"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: "Iniciar Sesión",
          headerShown: false,
          headerStyle: { backgroundColor: "rgba(0,0,0,0)" },
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
