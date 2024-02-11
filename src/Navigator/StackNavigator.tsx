import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../Screens/Home';
import { Formulario } from '../Screens/Formulario';

export const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Formulario" component={Formulario} />
    </Stack.Navigator>
  );
}