import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import GlobalStyles from '../GlobalStyles';

/**
 * @author Tom Jay
 * @function Splash
 **/
const Splash = props => {
  return (
    <View style={GlobalStyles.container}>
      <View>
        <Image source={require('../../assets/logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Splash;
