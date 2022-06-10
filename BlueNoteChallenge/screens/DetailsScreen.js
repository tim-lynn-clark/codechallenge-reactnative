import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import React from "react";
import fetchComponent from "../components/fetchComponent";
import Colors from "../constants/Colors";

const DetailsScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const { data: data2, loading } = fetchComponent({
    link: data.link,
  });
  console.log("details", data);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{data2.name}</Text>
      <Text>{data2.overview}</Text>
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
