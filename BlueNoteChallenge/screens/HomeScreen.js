import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Button,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import fetchComponent from "../components/fetchComponent";
import CancerList from "../components/cancerList";
import Header from "../components/UI/Header";
import Colors from "../constants/Colors";

const screen = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const { data, loading } = fetchComponent({
    link: "http://localhost:8888/cancer_types",
  });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <SafeAreaView style={styles.box}>
          <Header />
          <View style={styles.listContainer}>
            <Text style={styles.caption}>Choose Your Journey</Text>
            <Button
              title="webnav"
              onPress={() => {
                navigation.navigate("WebView");
              }}
            />
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
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    width: screen.width,
    alignItems: "center",
  },
  caption: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#393939",
  },
});
