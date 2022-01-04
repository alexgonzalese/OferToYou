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
import Account from "../screens/account/Account";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case "stores":
        iconName = "compass-outline";
        break;
      case "favorites":
        iconName = "heart-outline";
        break;
      case "topstores":
        iconName = "star-outline";
        break;
      case "search":
        iconName = "magnify";
        break;
      case "account":
        iconName = "home-outline";
        break;

      default:
        break;
    }
    return (
      <Icon
        type="material-community"
        name={iconName}
        fontSize={22}
        color={color}
      />
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="stores"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "#a17dc3",
          tabBarInactiveTintColor: "#442484",
        })}
      >
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
