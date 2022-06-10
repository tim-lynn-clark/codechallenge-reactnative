import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const screen = Dimensions.get("screen");

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/peace.jpeg")} />
      <Text style={styles.title}>Welcome to Blue Note</Text>
      <Text adjustsFontSizeToFit style={styles.subtitle}>
        Cancer can be hard, we are here to help.{"\n"}Start here and follow your
        journey below.
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: screen.width,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#254c9a",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "#304b8c",
  },
});
