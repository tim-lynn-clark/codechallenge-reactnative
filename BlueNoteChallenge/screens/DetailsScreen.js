import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import fetchComponent from "../components/fetchComponent";
import Colors from "../constants/Colors";
import DetailsItem from "../components/UI/DetailsItem";

const DetailsScreen = ({ navigation, route }) => {
  const { data, coping } = route.params;
  const { data: items, loading } = fetchComponent({
    link: data.link,
  });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text>Loading...</Text>
      </View>
    );
  }
  if (data === null) {
    return (
      <View style={styles.header}>
        <Header />
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Error loading data, Please check connection</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <SafeAreaView style={styles.box}>
          <DetailsItem
            data={items}
            coping={coping}
            webNav={(link) => {
              navigation.navigate("WebView", { link: link });
            }}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
});
