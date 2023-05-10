import React from 'react';
import Routes from './src/Routes';
import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('cws',() => App);
import { registerRootComponent } from 'expo';
registerRootComponent(App);

export default function App() {
  return (
    <Routes />

  );
}


