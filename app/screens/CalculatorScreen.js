import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import CalculatorButon from "../components/CalculatorButon";

function CalculatorScreen() {
  return (
    <View style={styles.background}>
      {/*top button row */}
      <View style={styles.topButton}>
        <View style={styles.topButtonLeft}>
          <Text style={{ color: "#FFEFF5", fontSize: 18 }}>Calculator</Text>
        </View>
        <View style={styles.topButtonRight}>
          <Text style={{ color: "#008471", fontSize: 18 }}>Converter</Text>
        </View>
      </View>
      {/* calculation */}
      <View style={styles.calculationDisplay}>
        <Text style={{ fontSize: 36 }}>10+2</Text>
        <View style={{ height: 50 }} />
        <Text style={{ fontSize: 64 }}>12</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Ionicons name="menu-outline" size={24} color="white" />
      </View>
      <View
        style={{ justifyContent: "space-evenly", flex: 1, marginBottom: 10 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <CalculatorButon value="c" color="#008471" textColor="#FFEFF5" />
          <CalculatorButon value="+" color="#008471" textColor="#FFEFF5" />
          <CalculatorButon value="%" color="#008471" textColor="#FFEFF5" />
          <CalculatorButon value="/" color="#008471" textColor="#FFEFF5" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <CalculatorButon
            value="7"
            color="#FFEFF5"
            borderColor="#008471"
            textColor="#008471"
          />
          <CalculatorButon
            value="8"
            color="#FFEFF5"
            borderColor="#008471"
            textColor="#008471"
          />
          <CalculatorButon
            value="9"
            color="#FFEFF5"
            borderColor="#008471"
            textColor="#008471"
          />
          <CalculatorButon value="*" color="#008471" textColor="#FFEFF5" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <CalculatorButon
            value="4"
            color="#FFEFF5"
            borderColor="#008471"
            textColor="#008471"
          />
          <CalculatorButon
            value="5"
            color="#FFEFF5"
            borderColor="#008471"
            textColor="#008471"
          />
          <CalculatorButon
            value="6"
            color="#FFEFF5"
            borderColor="#008471"
            textColor="#008471"
          />
          <CalculatorButon value="-" color="#008471" textColor="#FFEFF5" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <CalculatorButon
            value="1"
            color="#FFEFF5"
            borderColor="#008471"
            textColor="#008471"
          />
          <CalculatorButon
            value="2"
            color="#FFEFF5"
            borderColor="#008471"
            textColor="#008471"
          />
          <CalculatorButon
            value="3"
            color="#FFEFF5"
            borderColor="#008471"
            textColor="#008471"
          />
          <CalculatorButon value="+" color="#008471" textColor="#FFEFF5" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <CalculatorButon value="GT" color="#008471" textColor="#FFEFF5" />
          <CalculatorButon
            value="0"
            color="#FFEFF5"
            borderColor="#008471"
            textColor="#008471"
          />
          <CalculatorButon value="." color="#008471" textColor="#FFEFF5" />
          <CalculatorButon value="=" color="#FFEFF5" textColor="#008471" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop: Constants.statusBarHeight + 15,
    flex: 1,
    backgroundColor: "#00B59F",
  },
  topButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  topButtonLeft: {
    width: 175,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#008471",
  },
  topButtonRight: {
    width: 175,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#FFEFF5",
  },
  calculationDisplay: {
    alignItems: "flex-end",
    margin: 40,
  },
});

export default CalculatorScreen;
