import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import Card from "../components/UI/Card";

const CancerList = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (props.data.length === 0) {
    return <Text>No data was loaded.</Text>;
  } else {
    return props.data.map(({ name, link }, index) => (
      <TouchableOpacity
        onPress={() => {
          // props.onSelection(index);
          if (selectedIndex === index) {
            setSelectedIndex(null);
          } else {
            setSelectedIndex(index);
          }
        }}
        key={index}
      >
        <Card type={name} index={index} selected={selectedIndex}></Card>
      </TouchableOpacity>
    ));
  }
};

export default CancerList;
