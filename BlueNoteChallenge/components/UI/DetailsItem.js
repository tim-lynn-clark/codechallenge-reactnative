import React, { useState } from "react";
import {
  View,
  Text,
  LayoutAnimation,
  StyleSheet,
  UIManager,
  ScrollView,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const DetailsItem = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const Collapse = () => {
    return (
      <>
        <TouchableOpacity
          onPress={toggleExpanded}
          style={styles.header}
          activeOpacity={0.6}
        >
          <View>
            <Text style={styles.headerText}>Treatments</Text>
          </View>
          <Icon
            name={expanded ? "chevron-up-outline" : "chevron-down-outline"}
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <View style={[styles.list, !expanded ? styles.hidden : undefined]}>
          <Text>{props.data.overview}</Text>
        </View>
      </>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden={true} backgroundColor={"transparent"} translucent />
      <View style={styles.headContainer}>
        <Text style={styles.headerTitle}>Overview</Text>
        <Text style={styles.headerSubtitle}>{props.data.overview}</Text>
      </View>
      <Collapse />
    </ScrollView>
  );
};

export default DetailsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headContainer: {
    backgroundColor: "#e7e7e7",
    padding: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 10,
    color: "#254c9a",
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "#304b8c",
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 16,
    height: 30,
    marginLeft: "5%",
  },
  hidden: {
    height: 0,
  },
});
