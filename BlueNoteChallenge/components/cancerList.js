import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Card from "../components/UI/Card";

const CancerList = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [pressed, setPressed] = useState(false);

  if (props.data.length === 0) {
    return <Text>No data was loaded.</Text>;
  } else {
    return props.data.map(({ name, link }, index) => (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          if (selectedIndex === index) {
            setSelectedIndex(null);
            setPressed(!pressed);
          } else {
            setPressed(!pressed);
            setSelectedIndex(index);
          }
        }}
        key={index}
      >
        <Card
          type={name}
          index={index}
          selected={selectedIndex}
          onNext={() => {
            props.onSelection(index);
          }}
          pressed={pressed}
        ></Card>
      </TouchableOpacity>
    ));
  }
};

export default CancerList;
