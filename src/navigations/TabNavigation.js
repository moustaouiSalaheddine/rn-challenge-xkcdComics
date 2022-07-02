import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "@screens/Home";
import Favorite from "@screens/Favorite";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from "@constants";

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarStyle: {
                backgroundColor: COLORS.blackLight,
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === 'Favorite') {
                    iconName = focused ? 'favorite' : 'favorite-outline';
                }

                return (
                    route.name === 'Home' ?
                        <Ionicons name={iconName} size={size} color={color} />
                        : <MaterialIcons name={iconName} size={size} color={color} />
                )
            },
            tabBarActiveTintColor: COLORS.blue,
            tabBarInactiveTintColor: '#fff',
        })}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false, }} />
            <Tab.Screen name="Favorite" component={Favorite} options={{ headerShown: false, }} />
        </Tab.Navigator>
    )
}

export default TabNavigation