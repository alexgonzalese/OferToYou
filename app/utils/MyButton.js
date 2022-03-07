import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { buttonColors } from "./Colors/buttonColors";

const SIZES = ["small", "medium", "large"];
const TYPES = [
  "primary",
  "secondary",
  "accent",
  "error",
  "warning",
  "info",
  "success",
];
const ROUNDED = ["small", "medium", "large"];

export default function MyButton({
  children,
  onPress,
  type,
  size,
  label,
  rounded,
}) {
  const btnSize = SIZES.includes(size) ? size : "small";
  const btnType = TYPES.includes(type) ? type : "primary";
  const btnRound = ROUNDED.includes(rounded) ? rounded : "small";

  const btnStyle = {
    height: 50,
    width: btnSize === "large" ? "90%" : btnSize === "medium" ? 210 : "auto",
    borderRadius: btnRound === "small" ? 5 : btnRound === "medium" ? 10 : 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor:
      btnType === "primary"
        ? buttonColors.primary
        : btnType === "secondary"
        ? buttonColors.secondary
        : btnType === "accent"
        ? buttonColors.accent
        : btnType === "error"
        ? buttonColors.error
        : btnType === "warning"
        ? buttonColors.warning
        : btnType === "info"
        ? buttonColors.info
        : "primary",
    shadowColor:
      btnType === "primary"
        ? buttonColors.primary
        : btnType === "secondary"
        ? buttonColors.secondary
        : btnType === "accent"
        ? buttonColors.accent
        : btnType === "error"
        ? buttonColors.error
        : btnType === "warning"
        ? buttonColors.warning
        : btnType === "info"
        ? buttonColors.info
        : "primary",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,

    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  };

  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={{ color: "#fff", fontSize: 16 }}>{label}</Text>
    </TouchableOpacity>
  );
}
