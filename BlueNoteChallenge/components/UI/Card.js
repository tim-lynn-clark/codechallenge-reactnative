import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { wp, hp } from "./designDimensions";

const Card = (props) => {
  var colorsArray = ["#0bbdde", "#6ccfc0", "#76c4fa"];
  return (
    <View style={styles.container}>
      <Text
        adjustsFontSizeToFit
        style={[styles.text, { color: colorsArray[props.index] }]}
      >
        {props.type}
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    height: hp(10),
    width: wp(95),
    margin: 10,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
});
