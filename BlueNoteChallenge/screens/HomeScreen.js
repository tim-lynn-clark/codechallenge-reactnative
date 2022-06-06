import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import axios from "axios";
import fetchComponent from "../components/fetchComponent";

const HomeScreen = ({ navigation }) => {
  const { cancerTypes, loading } = fetchComponent();

  const CancerList = () => {
    if (loading) {
      return <Text>Loading...</Text>;
    } else {
      return cancerTypes.map(({ name, link }, index) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details");
          }}
          key={index}
        >
          <Text>
            {index + 1}. Cancer type: {name} and the link is: {link}.
          </Text>
        </TouchableOpacity>
      ));
    }
  };

  return (
    <View style={styles.container}>
      <CancerList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
