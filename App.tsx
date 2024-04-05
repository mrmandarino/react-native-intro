import 'react-native-gesture-handler';
import { LoginScreen } from './src/Auth/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { MainAppStack } from './src/navigator/MainAppStack';

export default function App() {
  return (
    <NavigationContainer>
      <MainAppStack />
    </NavigationContainer>
  );
}