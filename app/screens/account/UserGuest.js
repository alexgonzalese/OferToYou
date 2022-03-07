import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Header } from "react-native-elements";
// import Loading from "../../components/Loading";

import Logo from "../../../assets/logoInter.png";
import Layout from "../../../assets/HeaderOfferToYou.png";
import MyButton from "../../utils/MyButton";

export default function UserGuest() {
  const navigation = useNavigation();

  return (
    <>
      <Image source={Layout} style={styles.image2} />
      <ScrollView centerContent style={styles.viewBody}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

        <Text style={styles.title}>Bienvenido a OfferToYou</Text>
        <Text style={styles.text}>
          No te pierdas las ofertas, que estan cerca de ti regitrate y podras
          encontrar miles de ofertas para invertir de forma inteligente tu
          dinero!
        </Text>

        <MyButton
          rounded={"medium"}
          type={"primary"}
          btnSize={"medium"}
          label={"Ver tu perfil"}
          onPress={() => navigation.navigate("login")}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    alignContent: "center",
    flex: 1,
  },
  image: {
    height: 300,
    width: "100%",
    marginVertical: 0,
    marginBottom: 0,
    marginTop: -360,
  },
  image2: {
    height: 200,
    width: "100%",
    marginVertical: 0,
    marginBottom: 0,
    // marginTop: -360,
    //flex: 1,
  },
  text: {
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 20,
    textAlign: "center",
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#1071b8",
    alignItems: "center",
  },
  btncontainer: {
    width: "100%",
  },
});
