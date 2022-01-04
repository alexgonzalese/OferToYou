import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getCurrentUser } from "../../utils/actions";
import * as firebase from "firebase";

require("firebase/app");

import UserGuest from "./UserGuest";
import Userlogged from "./Userlogged";

export default function Account() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  return login ? <Userlogged /> : <UserGuest />;
}

const styles = StyleSheet.create({});
