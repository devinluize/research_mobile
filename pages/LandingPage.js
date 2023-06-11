import React, { useState } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();

const LandingPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSignIn = () => {
    // Tambahkan logika autentikasi di sini
    console.log('Login dengan email:', email, 'dan password:', password);
    navigation.navigate('SignIn');
  };

  const handleSignUp = () => {
    // Tambahkan logika registrasi di sini
    navigation.navigate('SignUp');
    console.log('Registrasi dengan email:', email, 'dan password:', password);
  };

  return (
    <View contentContainerStyle={styles.container}>
        <ScrollView>
        <View style={styles.innerContainer}>
            <Image style={styles.logoContainer} source={require('../assets/Circle.png')} resizeMode="contain" />
            <Image style={styles.logo} source={require('../assets/Logo.png')} resizeMode="contain" />
            <Text style={styles.title}>Welcome!</Text>

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonSignIn} onPress={handleSignIn}>
            <Text style={styles.buttonTextSignIn}>Sign In</Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  logoContainer: {
    alignSelf: 'center',
  },
  logo: {
    width: width * 0.8,
    height: height * 0.2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3E8B65',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3E8B65',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
  },
  buttonSignIn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    borderWidth: 2,
    borderColor: '#3E8B65',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonTextSignIn: {
    color: '#3E8B65',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LandingPage;
