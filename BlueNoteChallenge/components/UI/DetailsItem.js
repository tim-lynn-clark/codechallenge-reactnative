import React, { useState } from "react";
import {
  View,
  Text,
  LayoutAnimation,
  StyleSheet,
  UIManager,
  ScrollView,
  StatusBar,
  Dimensions,
  Linking,
  Image,
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
const screen = Dimensions.get("screen");

const DetailsItem = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  var objKeys = Object.keys(props.data).splice(3, 6);
  console.log(props.data[objKeys[selectedIndex]]);
  // var values = Object.values(props.data).splice(3, 6);
  // console.log(values);

  var values = props.data[objKeys[selectedIndex]];
  const Values = () => {
    return values.map((val, index) => {
      // var values = Object.values(props.data).splice(3, 6);
      // console.log(values);
      // return values.map((value, index) => {})

      return (
        <View key={index}>
          <Text>{val.title}</Text>
          <Text>{val.url}</Text>
        </View>
      );
    });
  };

  const Collapse = () => {
    return objKeys.map((key, index) => {
      return (
        <>
          <TouchableOpacity
            onPress={() => {
              key = { index };
              toggleExpanded();
              setSelectedIndex(index);
            }}
            style={styles.header}
            activeOpacity={0.6}
          >
            <View>
              <Text style={styles.headerText}>{key}</Text>
            </View>
            <Icon
              name={
                expanded && index === selectedIndex
                  ? "chevron-up-outline"
                  : "chevron-down-outline"
              }
              size={30}
              color="black"
            />
          </TouchableOpacity>
          {index === selectedIndex && (
            <View style={[styles.list, !expanded ? styles.hidden : undefined]}>
              <Values />
            </View>
          )}
        </>
      );
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} backgroundColor={"transparent"} translucent />
      <View style={styles.headContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/water.jpeg")}
        />

        <Text style={styles.headerTitle}>Overview</Text>
        <Text adjustsFontSizeToFit style={styles.headerSubtitle}>
          {props.data.overview}
        </Text>
        <Text
          onPress={() => {
            props.webNav(props.data.source);
          }}
          adjustsFontSizeToFit
          style={styles.headerSubtitle}
        >
          Click here for more information
        </Text>
      </View>
      <Collapse />
    </View>
  );
};

export default DetailsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headContainer: {
    backgroundColor: "#e7e7e7",
  },
  image: {
    width: screen.width,
    height: 200,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    color: "#254c9a",
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
    color: "#304b8c",
    paddingHorizontal: 10,
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
