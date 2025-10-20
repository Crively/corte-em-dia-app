import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/main/Navigation';


export default function App() {
return (
<View style={{ flex: 1, backgroundColor: 'white' }}>
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
</View> 
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
  },
});