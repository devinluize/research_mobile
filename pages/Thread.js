import React, { useState } from 'react';
import {Image, TouchableOpacity, StyleSheet, View, Text, TextInput, SafeAreaView, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const NewThread = ({navigation}) => {

  const handleForum = () => {
    navigation.navigate('Forum');
  }

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.topContainer}>
      <TouchableOpacity style={styles.leftContainer} onPress = {handleForum}>
          <Image source = {require('../assets/Arrow.png')}/>
          <Text style={styles.text}>Discussion Forum</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.line} />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: StatusBar.currentHeight || 0,
      },
      topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      leftContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 5
      },
      line: {
        width: '100%',
        height: 2,
        backgroundColor: '#D9D9D9',
        marginTop: 15,
        marginBottom: 15,
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
      },
});

export default NewThread;