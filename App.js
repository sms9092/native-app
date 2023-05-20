import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {BottomNavigation} from './assets/bottomnavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}