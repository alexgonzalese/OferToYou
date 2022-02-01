import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
// import Loading from "../../components/Loading";

import Logo from "../../../assets/RestaurantLogo.png";

export default function UserGuest() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView centerContent style={styles.viewBody}>
        <Image source={Logo} resizeMode="contain" style={styles.image} />
        <Text style={styles.title}>Bienvenido a OferToYou</Text>
        <Text style={styles.text}>
          No te pierdas las ofertas, que estan cerca de ti regitrate y podras
          encontrar miles de ofertas para invertir de forma inteligente tu
          dinero!
        </Text>

        <Button
          title="Ver tu perfil"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btncontainer}
          onPress={() => navigation.navigate("login")}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginVertical: 10,
    marginBottom: 40,
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
    backgroundColor: "#a17dc3",
    alignItems: "center",
  },
  btncontainer: {
    width: "100%",
  },
});
