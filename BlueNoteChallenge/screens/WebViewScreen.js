import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";

const WebViewScreen = ({ route, navigation }) => {
  const { link } = route.params;
  console.log(link);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{link}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.buttonRow}>
            <Icon
              name={"chevron-back-circle-outline"}
              size={30}
              color="black"
            />
            <Text style={styles.buttonText}>Go Back</Text>
          </View>
        </TouchableOpacity>
        <WebView source={{ uri: link }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default WebViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: Colors.primary,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
  },
});
