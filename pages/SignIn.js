import React, { useState } from 'react';
import { Image, View, Text, TextInput,ScrollView, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const { width } = Dimensions.get('window');
const Stack = createStackNavigator();
import {
  getAllForum,
  getForumByID,
  addThreadToForum,
  addCommentToThread,
  likeThread,
  unlikeThread,
  login,
  register,
  getmydata,
} from "../ForumApi";
const SignIn = ({navigation}) => {
  const [emaill, setEmaill] = useState('');
  const [passwordd, setPasswordd] = useState('');

  const handleSignIn = () => {
    // Tambahkan logika autentikasi di sini
    console.log('Login dengan email:', emaill, 'dan password:', passwordd);
    navigation.navigate('MainApp');
  };

  const handleSignUp = () => {
    // Tambahkan logika registrasi di sini
    console.log('Registrasi dengan email:', emaill, 'dan password:', passwordd);
    navigation.navigate('SignUp');
};
const Login = async () => {
  const email = emaill;
  const password = passwordd;
  const response = await login({ email, password });
  await console.log(response);
  if(response==false){

  }
  else{
    navigation.navigate("MainApp");
  }
}

  return (
    <View contentContainerStyle={styles.container}>
        <ScrollView>
            <View style={styles.innerContainer}>
                <Image style={styles.logoContainer} source={require('../assets/LogoLogin.png')} resizeMode="contain" />
                <Text style={styles.title}>Welcome Back!</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={emaill}
                        onChangeText={setEmaill}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={passwordd}
                        onChangeText={setPasswordd}
                        />
                </View>

                <TouchableOpacity style={styles.button} onPress={()=>Login()}>
                <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={(handleSignUp)}>
                    <Text style={styles.signUpText}>
                        New user? <Text style={styles.signUpLink}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
    logoContainer: {
        alignSelf: 'center',
    },
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3E8B65',
        textAlign: 'center',
    },
    textContainer:{
        textAlign:'left',
    },
    emailText:{
        fontSize: 16,
        textAlign: 'left',
    },

    passwordText:{
        fontSize: 16
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius:5,
      },
      inputContainer: {
        width: '80%',
        marginBottom: 10,
      },
    button: {
        backgroundColor: '#3E8B65',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  signUpLink: {
    color: '#3E8B65',
    fontWeight: 'bold',
  },
});

export default SignIn;