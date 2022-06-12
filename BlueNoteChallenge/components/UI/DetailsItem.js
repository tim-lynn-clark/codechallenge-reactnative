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
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import { wp, hp } from "./designDimensions";

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

  var colors = ["#c8e6ff", "#f9f9f9"];

  const toggleExpanded = () => {
    setExpanded(!expanded);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  var objKeys = Object.keys(props.data).splice(3, 6);
  let namesCapital = (names) =>
    names.map((name) => name.replace(/./, (c) => c.toUpperCase()));
  let titles = namesCapital(objKeys);

  console.log(props.data[objKeys[selectedIndex]]);

  var values = props.data[objKeys[selectedIndex]];

  const Values = () => {
    return values.map((val, index) => {
      if (val.title === "") {
        return null;
      }
      const capVal = val.title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );

      return (
        <View key={index} style={{ maxWidth: "95%" }}>
          <Text adjustsFontSizeToFit style={styles.textKey}>
            {capVal.trim()}
          </Text>

          <Text
            onPress={() => {
              props.webNav(val.url);
            }}
            style={styles.textUrl}
          >
            Click here to visit the {capVal.trim()} website.
          </Text>
          <View
            style={{
              borderBottomColor: "#e7e7e7",
              borderBottomWidth: 3,
              width: wp(100),
              marginVertical: 10,
            }}
          />
        </View>
      );
    });
  };

  const Collapse = () => {
    return objKeys.map((key, index) => {
      const capKeys = key.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );

      return (
        <>
          <TouchableOpacity
            key={index}
            onPress={() => {
              toggleExpanded();
              setSelectedIndex(index);
            }}
            style={[
              styles.header,
              { backgroundColor: colors[index % colors.length] },
            ]}
            activeOpacity={0.6}
          >
            <View>
              <Text style={styles.headerText}>{capKeys}</Text>
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
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  hidden: {
    height: 0,
  },
  textKey: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "5%",
    marginTop: 5,
    color: "#304b8c",
  },
  textUrl: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: "5%",
    marginTop: 5,
    color: "#575757",
  },
  list: {
    overflow: "hidden",
  },
});
