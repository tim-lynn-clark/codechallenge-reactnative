import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";

const screen = Dimensions.get("screen");

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} backgroundColor={"transparent"} translucent />

      <Image style={styles.image} source={require("../../assets/peace.jpeg")} />
      <Text accessible={true} accessibilityRole="header" style={styles.title}>
        Welcome to Blue Note
      </Text>
      <Text
        accessible={true}
        accessibilityRole="text"
        adjustsFontSizeToFit
        style={styles.subtitle}
      >
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
    fontWeight: "400",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "#304b8c",
  },
});
