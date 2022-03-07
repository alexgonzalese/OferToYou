import React, { useRef } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-easy-toast";

import RegisterForm from "../../components/account/RegisterForm";

export default function Register() {
  const toasRef = useRef();
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <RegisterForm toasRef={toasRef} />
      <Toast ref={toasRef} position="center" opacity={(0, 9)} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    marginHorizontal: 30,
  },
});
