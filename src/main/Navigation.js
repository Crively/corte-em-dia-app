import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen.js';
import Agendamento from '../screens/agendamento.js';
import MinhaConta from '../screens/minhaConta.js';


const Stack = createNativeStackNavigator();


export default function Navigation() {
return (
<Stack.Navigator>
<Stack.Screen name="Home" options={{ title: 'Home' }} style={{ backgroundColor: '#4970eeff' }} component={HomeScreen}/>
<Stack.Screen name="Agendamento" options={{ title: 'Agendamento' }} component={Agendamento}/>
<Stack.Screen name="Sua Conta" options={{ title: 'Sua Conta' }} component={MinhaConta}/>
</Stack.Navigator>
);
}