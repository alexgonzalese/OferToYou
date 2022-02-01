import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { getCurrentUser } from "../../utils/actions";
import firebaseApp from "../../utils/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import UserGuest from "./UserGuest";
import Userlogged from "./Userlogged";
import Loading from "../../components/Loading";

export default function Account() {
  const [login, setLogin] = useState(null);
  const auth = getAuth();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  return login ? <Userlogged /> : <UserGuest />;

  // return (
  //   <View>
  //     <Loading visible={visible}>
  //       <View style={{ alignItems: "center" }}>
  //         <View style={styles.header}>
  //           <TouchableOpacity onPress={() => setVisible(false)}>
  //             <Image
  //               source={require("../../../assets/close-circle.png")}
  //               style={{ height: 30, width: 30 }}
  //             />
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //       <View style={{ alignItems: "center" }}>
  //         <Image
  //           source={require("../../../assets/RestaurantLogo.png")}
  //           style={{
  //             height: 150,
  //             width: 150,
  //             marginVertical: 10,
  //           }}
  //         />
  //       </View>

  //       <Text style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}>
  //         Felicidades por Registrarte en OferToYou
  //       </Text>
  //     </Loading>
  //     <Button title="Open Modal" onPress={() => setVisible(true)} />
  //   </View>
  // );
}

const styles = StyleSheet.create({});
