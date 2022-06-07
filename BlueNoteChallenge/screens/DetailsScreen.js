import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import fetchComponent from "../components/fetchComponent";

const DetailsScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const { data: data2, loading } = fetchComponent({
    link: data.link,
  });
  console.log("details", data);

  return (
    <View style={styles.container}>
      <Text>{data2.name}</Text>
      <Text>{data2.overview}</Text>
      <Button onPress={() => navigation.goBack()} title="go back" />
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
