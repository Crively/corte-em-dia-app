import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/homeScreen.js';
import Agendamento from '../screens/agendamento.js';
import MinhaConta from '../screens/minhaConta.js';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1A1A1A' },
        headerTintColor: '#C89F7B',
        headerTitleStyle: { 
          fontWeight: 'bold',
          fontSize: 33,
        },
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
