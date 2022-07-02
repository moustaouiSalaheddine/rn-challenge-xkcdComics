import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTab from "./TabNavigation";
import SplashScreen from "@screens/SplashScreen";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="Home" component={HomeTab} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { AppNavigation }