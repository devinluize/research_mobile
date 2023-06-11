import React from 'react';
import { Image, Text, ScrollView, StyleSheet, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

const handleCalculator = () => {
  // Tambahkan logika autentikasi di sini

  navigation.navigate('Calculator');
};

const Calculator = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
            <Text style={styles.headerText}>Discussion Forum</Text>
        </View>
      </ScrollView>
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
    height: '15%',
    width: '100%',
    backgroundColor: '#BCDEC9',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  image: {
    width: '30%',
    height: '20%',
    marginTop: 20,
    marginLeft: 10,
  },
});

export default Calculator;
