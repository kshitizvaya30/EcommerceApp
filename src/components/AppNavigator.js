import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProductDetail from './screens/ProductDetail';
import MyCart from './screens/Cart';
import Success from './screens/Success';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='ProductDetail' component={ProductDetail} options={{ headerShown: false }} />
                <Stack.Screen name='Cart' component={MyCart} options={{ headerShown: false }} />
                <Stack.Screen name='Success' component={Success} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
