import React from 'react';
import { SafeAreaView } from 'react-native';
import AppContainer from './src/Main';


export default function App() {
return (
<SafeAreaView style={{ flex: 1 }}>
<AppContainer />
</SafeAreaView>
);
}