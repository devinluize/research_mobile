import React, { useState } from 'react';
import {Button, radioButton, Image, View, Text, TextInput,ScrollView, TouchableOpacity, StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const { width } = Dimensions.get('window');
const Stack = createStackNavigator();
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import {
  register,
} from "../ForumApi";
const SignUp = ({navigation}) => {
  const [emaill, setEmaill] = useState('');
  const [passwordd, setPasswordd] = useState('');
  const [FullName, setFullName] = useState('');
  const [Username, setUsername] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 5, 10));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [genderr, setGender] = useState('');
  const Register = async () => {

    const formatDate = selectedDate.toISOString().split('T')[0];

    const full_name = FullName;
    const username = Username;
    const email = emaill;
    const password = passwordd;
    const birthday = selectedDate.slice(0,9);
    const gender = genderr;
    const password_confirmation = ConfirmPassword;
    const response = await register({
        full_name,
        username,
        email,
        password,
        birthday,
        gender,
        password_confirmation
    });
    
    console.log(selectedDate);
    console.log(gender);
    console.log(password)
    console.log(password_confirmation)
    console.log(FullName);
    
    // await console.log(response);
}
// const register = ()=>{
//   const payload = {
//           full_name = FullName,
//          username = "johndoe",
//          email = "johndoe@example.com",
//          password = "johndoe123",
//          birthday = "1999-01-01",
//          gender = "female",
//   }
// }
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

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  };


const handleSignUp = () => {
    // Tambahkan logika registrasi di sini
    console.log('Registrasi dengan email:', emaill, 'dan password:', passwordd);
    navigation.navigate('SignIn');
};

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
                        onChangeText={(text) => setFullName(text)}
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
                <View style={styles.inputContainer}>
        <Text style={styles.label}>Birthday</Text>
        <View style={styles.input}>
          <View style={styles.inputTextContainer}>
            <TextInput
              placeholder="dd/mm/yyyy"
              value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
              onChangeText={(text) => {
                setSelectedDate(null);
                const [day, month, year] = text.split('/');
                const newDate = new Date(`${year}-${month}-${day}`);
                if (!isNaN(newDate.getTime()) && newDate <= new Date()) {
                  setSelectedDate(newDate);
                }
              }}
            />
          </View>
          <TouchableOpacity onPress={toggleDatePicker}>
            <AntDesign name="calendar" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Gender:</Text>
        <TouchableOpacity
          style={[styles.radioButton, genderr === 'male' && styles.radioButtonSelected]}
          onPress={() => handleGenderChange('male')}
        >
          {genderr === 'male' && <View style={styles.radioButtonInner} />}
        </TouchableOpacity>
        <Text>Male</Text>
        <TouchableOpacity
          style={[styles.radioButton, genderr === 'female' && styles.radioButtonSelected]}
          onPress={() => handleGenderChange('female')}
        >
          {genderr === 'female' && <View style={styles.radioButtonInner} />}
        </TouchableOpacity>
        <Text>Female</Text>
        <TouchableOpacity
          style={[styles.radioButton, genderr === 'Other' && styles.radioButtonSelected]}
          onPress={() => handleGenderChange('Other')}
        >
          {genderr === 'Other' && <View style={styles.radioButtonInner} />}
        </TouchableOpacity>
        <Text>Other</Text>
      </View>

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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  radioButtonSelected: {
    borderColor: 'blue',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'blue',
  },
});

export default SignUp;