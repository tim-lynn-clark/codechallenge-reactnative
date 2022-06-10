import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HeaderTitle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/logomark-blue.png")}
      />
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 25,
    height: 35,
    marginRight: 10,
    marginBottom: 5,
  },
});
