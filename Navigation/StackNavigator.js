import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import ISSLocation from "../Screens/ISSLocation"
import Meteors from "../Screens/Meteors"
import Updates from "../Screens/Updates"

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="ISSLocation" component={ISSLocation} />
      <Stack.Screen name="Meteors" component={Meteors} />
      <Stack.Screen name="Updates" component={Updates} />
    </Stack.Navigator>
  );
}