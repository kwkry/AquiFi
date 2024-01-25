import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import Home from "../screens/tabs/HomeScreen";
import MonitorScreen from "../screens/tabs/MonitorScreen";
import Profile from "../screens/tabs/ProfileScreen";

import TurbidityScreen from "../screens/parameters/TurbidityScreen";
import ResidualCScreen from "../screens/parameters/ResidualCScreen";
import PHScreen from "../screens/parameters/PHScreen";

import HomeIcon from "../assets/icons/Home.png";
import MonitorIcon from "../assets/icons/Monitor.png";
import ProfileIcon from "../assets/icons/Transparent-Profile.png";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MonitorStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MonitorScreen"
      component={MonitorScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TurbidityScreen"
      component={TurbidityScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ResidualCScreen"
      component={ResidualCScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PHScreen"
      component={PHScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const LandingPage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 10,
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={HomeIcon}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Monitor"
        component={MonitorStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={MonitorIcon}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={ProfileIcon}
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LandingPage;
