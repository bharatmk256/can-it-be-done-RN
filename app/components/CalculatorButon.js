import React from "react";
import { View, StyleSheet, Text } from "react-native";

function CalculatorButon({ value, color, borderColor, textColor }) {
  return (
    <View
      style={{
        height: 64,
        width: 64,
        backgroundColor: color,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: borderColor ? borderColor : null,
        borderWidth: borderColor ? 4 : 0,
      }}
    >
      <Text style={{ fontSize: 20, color: textColor }}>{value}</Text>
    </View>
  );
}

export default CalculatorButon;
