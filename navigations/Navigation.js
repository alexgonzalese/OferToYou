import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import React from "react";

import StoresStack from "./StoresStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";
import TopstoresStack from "./TopstoresStack";
import Stores from "../screens/Stores";
import Favorites from "../screens/Favorites";
import Topstores from "../screens/Topstores";
import Search from "../screens/Search";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="stores"
          component={Stores}
          options={{ title: "Tiendas" }}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="topstores"
          component={Topstores}
          options={{ title: "Top Tiendas" }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{ title: "Cuentas" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
