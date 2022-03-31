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
 *
 *
 * $ npx pod-install ios
 */

import 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/Home';
import Detail from './screens/Detail';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
