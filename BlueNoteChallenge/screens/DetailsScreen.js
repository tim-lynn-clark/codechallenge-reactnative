import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
