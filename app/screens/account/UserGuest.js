import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Loading from "../../components/Loading";

import Logo from "../../assets/RestaurantLogo.png";

export default function UserGuest() {
  return (
    <View>
      <ScrollView centerContent style={styles.viewBody}>
        <Image source={Logo} resizeMode="contain" style={styles.image} />
        <Text>Bienvenido a OferToYou</Text>
        <Text>
          No te pierdas las ofertas las ofertas, que estan cerca de ti regitrate
          y podras encontrar miles de ofertas para invertir de forma inteligente
          tu dinero!
        </Text>
      </ScrollView>

      {/* TODO */}
      {/* video 34 */}
      {/* <Loading isVisible={true} text="Cargando.." /> */}
    </View>
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
    textAlign: "center",
  },
});
