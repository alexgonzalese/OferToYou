import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/logoInter.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.container}>
        <Text>login form</Text>
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
    </ScrollView>
  );
}

function CreateAccount(props) {
  const navigation = useNavigation();
  return (
    <Text
      style={styles.register}
      onPress={() => navigation.navigate("register")}
    >
      ¿Aún no tienes una cuenta?{" "}
      <Text style={styles.btnregister}>Regístrate</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: "100%",
    marginBottom: 20,
    marginLeft: -100,
    marginTop: 5,
  },
  container: {
    marginHorizontal: 40,
  },
  divider: {
    backgroundColor: "#1071b8",
    margin: 40,
  },
  register: {
    marginTop: 15,
    marginHorizontal: 10,
    alignSelf: "center",
  },
  btnregister: {
    color: "#1071b8",
    fontWeight: "bold",
  },
});
