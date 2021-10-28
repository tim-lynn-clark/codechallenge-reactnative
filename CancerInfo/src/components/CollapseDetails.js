import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

/**
 * @author Tom Jay
 * @function CollapseDetails
 **/
const CollapseDetails = ({items, collapsed, onPress}) => {
  return (
    <Collapsible collapsed={collapsed} align="center">
      <View style={styles.content}>
        {items.map(treatmentItem => {
          return (
            <View
              key={Math.random().toString(36)}
              style={{marginTop: 5, marginLeft: 20}}>
              <Text>{treatmentItem.title}</Text>
              <TouchableOpacity
                style={{marginBottom: 5, marginTop: 2}}
                onPress={() => {
                  onPress(treatmentItem);
                }}>
                <Text style={{color: 'blue'}}>Learn More...</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </Collapsible>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CollapseDetails;
