/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.ignoredYellowBox = ['Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.', 'Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
console.disableYellowBox = true 
YellowBox.ignoreWarnings([
  'Require cycle:',
]);
AppRegistry.registerComponent(appName, () => App);
