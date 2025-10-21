import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/homeScreen.js';
import Agendamento from '../screens/agendamento.js';
import MinhaConta from '../screens/minhaConta.js';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff', 
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
        
      />
      <Stack.Screen
        name="Agendamento"
        component={Agendamento}
        options={{ title: 'Agendar Corte' }}
      />
      <Stack.Screen
        name="Minha Conta"
        component={MinhaConta}
        options={{ title: 'Minha Conta' }}
      />
    </Stack.Navigator>
  );
}
