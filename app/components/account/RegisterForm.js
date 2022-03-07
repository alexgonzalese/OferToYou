import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { size, isEmpty } from "lodash";
import axios from "axios";
//import * as firebase from "firebase";
import registerUser from "../../utils/actions";
//import Icon from "react-native-vector-icons/FontAwesome";

import { validateEmail } from "../../utils/validations";
import Layout from "../../../assets/HeaderOfferToYou.png";

async function getInfo() {
  try {
    const response = await axios({
      url: "http://192.168.1.37:80/api/v1/users",
      method: "GET",
    });
    console.log("getInfo");

    console.log(response.data.users);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export default function RegisterForm(props) {
  const { toasRef } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());

  useEffect(() => {
    async function LoadInfo() {
      const response = await getInfo();

      return response;
    }
    LoadInfo();
  });

  const doregisterUser = async () => {
    const result = await registerUser(formData.email, formData.password);
  };

  const onSubmit = () => {
    //console.log(formData);
    //console.log(validateEmail(formData.email));

    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      //console.log("Todos los campos son obligatorios");
      toasRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      toasRef.current.show("El email no es correcto");
    } else if (formData.password !== formData.repeatPassword) {
      toasRef.current.show("Las contraseñas tienen que ser  iguales");
    } else if (size(formData.password) < 6) {
      toasRef.current.show("La contraseña debe tener al menos 6 caracteres");
    } else {
      doregisterUser();
    }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <>
      <Image source={Layout} style={styles.image2} />

      <ScrollView>
        <Input
          containerStyle={styles.input}
          placeholder="Ingresa tu email.."
          onChange={(e) => onChange(e, "email")}
          rightIcon={
            <Icon
              type="material-community"
              name="at"
              iconStyle={styles.iconRight}
            />
          }
        />
        <Input
          containerStyle={styles.input}
          placeholder="Ingresa tu contrasena.."
          password={true}
          secureTextEntry={showPassword ? false : true}
          onChange={(e) => onChange(e, "password")}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.iconRight}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Input
          containerStyle={styles.input}
          placeholder="Repetir contrasena.."
          password={true}
          secureTextEntry={showRepeatPassword ? false : true}
          onChange={(e) => onChange(e, "repeatPassword")}
          rightIcon={
            <Icon
              type="material-community"
              name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.iconRight}
              onPress={() => setShowRepeatPassword(!showRepeatPassword)}
            />
          }
        />
        <Button
          title="Registrar Nuevo Usuario"
          containerStyle={styles.btnContainerRegister}
          buttonStyle={styles.btn}
          onPress={onSubmit}
        />
      </ScrollView>
    </>
  );
}

function defaultFormValue() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btn: {
    backgroundColor: "#1071b8",
  },
  iconRight: {
    color: "#C1C1C1",
  },
  image2: {
    height: 200,
    width: "100%",
    marginVertical: 0,
    marginBottom: 0,
    // marginTop: -360,
    //flex: 1,
  },
});
