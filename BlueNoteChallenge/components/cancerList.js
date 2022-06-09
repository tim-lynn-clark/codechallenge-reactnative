import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Card from "../components/UI/Card";

const CancerList = (props) => {
  if (props.data.length === 0) {
    return <Text>No data was loaded.</Text>;
  } else {
    return props.data.map(({ name, link }, index) => (
      <TouchableOpacity
        onPress={() => {
          props.onSelection(index);
        }}
        key={index}
      >
        <Card type={name}></Card>
      </TouchableOpacity>
    ));
  }
};

export default CancerList;
