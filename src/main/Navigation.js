import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Agendamento from '../screens/agendamento';
import MinhaConta from '../screens/minhaConta';


const Stack = createNativeStackNavigator();


export default function Navigation() {
return (
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Corte Em Dia' }} />
<Stack.Screen name="Booking" component={Agendamento} options={{ title: 'Agendar Corte' }} />
<Stack.Screen name="Account" component={MinhaConta} options={{ title: 'Minha Conta' }} />
</Stack.Navigator>
);
}