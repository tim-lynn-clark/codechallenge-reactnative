import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CancerList = (props) => {
  if (props.loading) {
    return <Text>Loading...</Text>;
  } else {
    return props.data.map(({ name, link }, index) => (
      <TouchableOpacity
        onPress={() => {
          props.onSelection(index);
        }}
        // onPress={() => {
        //   navigation.navigate("Details", {
        //     data: data[index],
        //   });
        // }}
        key={index}
      >
        <Text>
          {index + 1}. Cancer type: {name} and the link is: {link}.
        </Text>
      </TouchableOpacity>
    ));
  }
};

export default CancerList;
