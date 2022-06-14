import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { wp, hp } from "./designDimensions";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Card = (props) => {
  var descriptions = [
    "Breast cancer is the second most common cancer in women after skin cancer",
    "Leukemia is a broad term for cancers of the blood cells",
    "Lymphoma is a broad term for cancer that begins in cells of the lymph system",
  ];

  let Comp;
  if (props.selected === props.index) {
    Comp = TouchableOpacity;
  } else {
    Comp = View;
  }
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Text
          accessible={true}
          accessibilityRole="text"
          style={[
            styles.text,
            {
              color: props.selected === props.index ? Colors.primary : "black",
            },
          ]}
        >
          {props.type}
        </Text>

        <Comp
          accessible={true}
          accessibilityRole="button"
          activeOpacity={0.6}
          style={{ flexDirection: "row" }}
          onPress={() => {
            if (props.selected === props.index) {
              props.onNext();
            }
          }}
        >
          <Text
            accessible={true}
            accessibilityRole="text"
            style={styles.rightText}
          >
            {props.selected === props.index ? "Next" : "Select"}
          </Text>
          <Ionicons
            name={
              props.selected === props.index
                ? "ios-checkmark-circle"
                : "add-circle"
            }
            size={30}
            color={props.selected === props.index ? "#9EE3B4" : "black"}
          />
        </Comp>
      </View>
      <View
        style={{
          borderBottomColor: "#e7e7e7",
          borderBottomWidth: 3,
          width: wp(95),
        }}
      />
      <View style={styles.bottomHalf}>
        <View style={styles.bottomContainer}>
          <MaterialCommunityIcons
            name="heart-plus-outline"
            size={25}
            color="#575757"
          />
          <Text style={styles.bottomText}>Treatments</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MaterialCommunityIcons
            name="stethoscope"
            size={25}
            color="#575757"
          />
          <Text style={styles.bottomText}>Causes</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MaterialCommunityIcons
            name="hand-heart-outline"
            size={25}
            color="#575757"
          />
          <Text style={styles.bottomText}>Care</Text>
        </View>
      </View>
      {props.selected === props.index && (
        <View
          style={[
            styles.list,
            props.selected !== props.index ? styles.hidden : null,
          ]}
        >
          <Text style={styles.hiddenText}>
            {descriptions[props.index]}. Click{" "}
            <Text
              onPress={() => {
                if (props.selected === props.index) {
                  props.onNext();
                }
              }}
              style={{ fontWeight: "bold", color: Colors.primary }}
            >
              Next
            </Text>{" "}
            for more details
          </Text>
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: wp(95),
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
  },
  rightText: {
    fontSize: 25,
    fontWeight: "400",
    marginRight: 10,
  },
  topHalf: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  bottomHalf: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  bottomText: {
    fontSize: 20,
    fontWeight: "300",
    marginLeft: 3,
    color: "#575757",
  },
  hidden: {
    height: 0,
  },
  hiddenText: {
    fontSize: 20,
    fontWeight: "300",
    padding: 10,
    color: "#575757",
  },
  list: {
    overflow: "hidden",
  },
});
