/**
 * [HTTP 통신]
 * $ npm i axios
 * [check Type]
 * $ npm i prop-types
 * [Image Slider Box]
 * $ npm i react-native-image-slider-box
 * [Navigation]
 * $ npm install @react-navigation/native
 * $ npm install react-native-screens react-native-safe-area-context
 * [Stack Navigator]
 * $ npm install @react-navigation/stack
 * $ npm install react-native-gesture-handler
 * [vector icons]
 * $ npm i react-native-vector-icons
 * [별점(star rating)]
 * $ npm i react-native-star-rating
 * [날짜 포맷 설정]
 * $ npm i dateformat
 *
 * $ npx pod-install ios
 */

import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './components/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
 