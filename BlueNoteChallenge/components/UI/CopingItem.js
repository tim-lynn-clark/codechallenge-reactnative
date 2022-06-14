import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { wp, hp } from "./designDimensions";

const CopingItem = (props) => {
  var link = "http://localhost:8888/coping_with_cancer";
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        props.onClick(link);
      }}
    >
      <Text
        accessible={true}
        accessibilityRole="button"
        style={styles.buttonText}
      >
        Coping with Cancer
      </Text>
    </TouchableOpacity>
  );
};

export default CopingItem;

const styles = StyleSheet.create({
  button: {
    width: wp(95),
    height: hp(7),
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: Colors.primary,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
