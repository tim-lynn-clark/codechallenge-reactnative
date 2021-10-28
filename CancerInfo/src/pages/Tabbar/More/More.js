import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * @author Tom Jay
 * @function More
 **/
const More = props => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>More</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default More;
