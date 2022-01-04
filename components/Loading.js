import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";
import { ActivityIndicator } from "react-native-web";

export default function Loading({ isVisible, text }) {
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <view>
        <ActivityIndicator />
        <text>{text}</text>
      </view>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#442484",
    borderWidth: 2,
    borderRadius: 10,
  },
});
