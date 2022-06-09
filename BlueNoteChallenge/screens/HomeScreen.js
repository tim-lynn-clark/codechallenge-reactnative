import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import fetchComponent from "../components/fetchComponent";
import CancerList from "../components/cancerList";
import Header from "../components/UI/Header";

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
    <SafeAreaView style={styles.container}>
      <Header />
      <CancerList
        loading={loading}
        data={data}
        onSelection={(index) => {
          navigation.navigate("Details", {
            data: data[index],
          });
        }}
      />
    </SafeAreaView>
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
