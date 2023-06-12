import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useNavigation } from '@react-navigation/stack';

import Home from '../pages/Home';
import Forum from '../pages/Forum';
import Calculator from '../pages/Calculator';
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NewThread from '../pages/NewThread';
import Thread from '../pages/Thread';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options = {{headerShown: false}} />
            <Tab.Screen name="Forum" component={Forum} options = {{headerShown: false}}/>
            <Tab.Screen name="Calculator" component={Calculator} options = {{headerShown: false}} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return(
        <Stack.Navigator>
        <Tab.Screen name="Forum" component={Forum} options = {{headerShown: false}}/>
            <Stack.Screen name = "LandingPage" component={LandingPage} options={{headerShown: false}}/>
            <Stack.Screen name = "SignIn" component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name = "SignUp" component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options = {{headerShown: false}}/>
            <Stack.Screen name="NewThread" component={NewThread} options = {{headerShown: false}}/>
            <Stack.Screen name="Thread" component={Thread} options = {{headerShown: false}}/>
        </Stack.Navigator>
    )
}


export default Router

const styles = StyleSheet.create({})