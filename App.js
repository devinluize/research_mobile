import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Router from './router'

const App = () => {
    return(
    <NavigationContainer>
        <Router />
    </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})
