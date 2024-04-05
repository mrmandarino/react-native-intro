import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../Auth/screens/LoginScreen';
import { RegisterScreen } from '../Auth/screens/RegisterScreen';

export type RootStackParams = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const MainAppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />

            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />
        </Stack.Navigator>
    );
}