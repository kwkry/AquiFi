import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import LogInSignUp from "../screens/authentication/LogInSignUp";
import SignUpPage from "../screens/authentication/SignUpPage";
import LogInPage from "../screens/authentication/LogInPage";
import TabNavigator from "./TabNavigator";

export default function RootNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogInSignUp"
        component={LogInSignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogIn"
        component={LogInPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LandingPage"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
