import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { firebaseApp } from "./app/utils/firebase";

import Navigation from "./app/navigations/Navigation";

export default function App() {
  return <Navigation />;
}
