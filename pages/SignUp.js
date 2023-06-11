import React, { useState } from 'react';
import {Button, radioButton, Image, View, Text, TextInput,ScrollView, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const { width } = Dimensions.get('window');
const Stack = createStackNavigator();
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  register,
} from "../ForumApi";
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FullName, setFullName] = useState('');
  const [Username, setUsername] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 5, 10));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const Register = async () => {
    const full_name = "Johndoee";
    const username = "johndoe";
    const email = "johndoe@example.com";
    const password = "johndoe123";
    const birthday = "1999-01-01";
    const gender = "female";
    const response = await register({
        full_name,
        username,
        email,
        password,
        birthday,
        gender,
    });
    console.log(FullName);
    // await console.log(response);
}
const handleSignIn = () => {
    // Tambahkan logika autentikasi di sini
    console.log('Login dengan email:', email, 'dan password:', password);
  };

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date && date <= new Date()) {
      setSelectedDate(date);
    }
  };
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
    console.log('Selected Date:', selectedDate);


const handleSignUp = () => {
    // Tambahkan logika registrasi di sini
    console.log('Registrasi dengan email:', email, 'dan password:', password);
    navigation.navigate('SignUp');
};

const[gender, setGender] = useState([
    {
        id: '1',
        label: 'male',
        value: 'male',
    },
    {
        id:'2',
        label:'female',
        value:'female',
    },
]);



  return (
    <View contentContainerStyle={styles.container}>
        <ScrollView>
            <View style={styles.innerContainer}>
                <Image style={styles.logoContainer} source={require('../assets/LogoLogin.png')} resizeMode="contain" />
                <Text style={styles.title}>Hello!</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        value={FullName}
                        onChangeText={setFullName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>UserName</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="UserName"
                        value={Username}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
               <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Confirm Password</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry
                        value={ConfirmPassword}
                        onChangeText={setConfirmPassword}
                        />
                </View>
                {/* <View style={styles.inputContainer}>
                <Text style={styles.label}>Birthday</Text>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Date"
                            value={selectedDate.toLocaleDateString()}
                            />
                        <TouchableOpacity onPress={toggleDatePicker}>
                            <Text style={{ color: '#3E8B65', fontSize: 14, marginRight:'40'}}>Choose</Text>
                        </TouchableOpacity>
                    </View>
                    {showDatePicker && (
                        <DateTimePicker
                        value={selectedDate}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                        />
                    )}

                </View> */}

                <TouchableOpacity style={styles.button} onPress={()=>Register()}>
                <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.signUpText}>
                        Have an account? <Text style={styles.signUpLink}>Sign In</Text>
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
        flexDirection: 'row',
        alignItems:'center',
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

export default SignUp;