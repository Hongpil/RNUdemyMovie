/**
 * [HTTP 통신]
 * $ npm i axios
 * [check Type]
 * $ npm i prop-types
 * [Image Slider Box]
 * $ npm i react-native-image-slider-box
 *
 *
 * $ npx pod-install ios
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
