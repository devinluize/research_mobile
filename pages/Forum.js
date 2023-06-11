import React, { useState } from 'react';
import {StyleSheet,View,Text,TextInput,SafeAreaView,StatusBar,FlatList,Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Forum = ({ navigation }) => {


  const handleNewThread = () => {
    navigation.navigate('NewThread');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>Discussion Forum</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.boxNewThread} onPress={handleNewThread}>
                <Text style={styles.newThread}>New Thread</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 30,
  },
  boxNewThread: {
    backgroundColor: '#3E8B65',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 5,
  },
  newThread: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#D9D9D9',
    marginTop: 15,
  },
});

export default Forum;
