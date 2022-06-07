import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import axios from "axios";
import fetchComponent from "../components/fetchComponent";
import CancerList from "../components/cancerList";

const HomeScreen = ({ navigation }) => {
  const { data, loading } = fetchComponent({
    link: "http://localhost:8888/cancer_types",
  });

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CancerList
        loading={loading}
        data={data}
        onSelection={(index) => {
          navigation.navigate("Details", {
            data: data[index],
          });
        }}
      />
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
