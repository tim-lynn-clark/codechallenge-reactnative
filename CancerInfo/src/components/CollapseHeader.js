import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
/**
 * @author Tom Jay
 * @function CollapseHeader
 **/
const CollapseHeader = ({collapsed, onPress, title}) => {
  return (
    <View
      style={{
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'row',
        alignContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#b3d4fc',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            marginLeft: 5,
            width: 300,
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {title}
        </Text>
      </View>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#b3d4fc',
          paddingRight: 5,
        }}>
        {collapsed && (
          <Ionicons name="chevron-down-outline" size={25} color="gray" />
        )}
        {!collapsed && (
          <Ionicons name="chevron-up-outline" size={25} color="gray" />
        )}
      </TouchableOpacity>
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

export default CollapseHeader;
