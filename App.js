
import React from 'react'
import { Text, StyleSheet, View ,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Router from './router'
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
} from "./ForumApi";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import SignUp from './pages/SignUp';
const App = () => {
  const [forum, setForum] = useState({
    title: "Pengumpulan Tugas 1",
    message: "Halo semua, ini adalah thread untuk pengumpulan tugas 1",
})
const [comment, setComment] = useState({
    message: "Halo semua, ini adalah thread untuk pengumpulan tugas 1",
})
const AllForum = async () => {
    const response = await getAllForum();
    await console.log(response);
}

const ForumByID = async (id) => {
    const response = await getForumByID(id);
    await console.log(response);
}

const AddThread = async () => {
  const title = "dasdasdasdas dasd123123123123";
  const message = "blablabla12123 1321321 12 3 1 12 312312 sad asd a312321312";
  const id2 = "2"
    const response = await addThreadToForum({
      title,
      message,
      id2,
    });
    await console.log(response);
    console.log(title);
}

const AddThread2 = async () => {
  const response = await addThreadToForum(forum);
  await console.log(response);
}
const Getmydatafromapi = async () => {
  const response = await getmydata();
  await console.log(response);
}

const AddComment = async () => {
    const response = await addCommentToThread(comment);
    await console.log(response);
}

const Like = async (id) => {
    const response = await likeThread(id);
    await console.log(response);
}

const Unlike = async (id) => {
    const response = await unlikeThread(id);
    await console.log(response);
}

const Login = async () => {
    const email = "elys@gmail.com";
    const password = "elys123";
    const response = await login({ email, password });
    await console.log(response);
}

const Register = async () => {
    const full_name = "John Doe123rrr3";
    const username = "johndoe12333312";
    const email = "johndoe121233@example.com";
    const password = "johndoe123123";
    const birthday = "1999-01-01";
    const gender = "female";
    const password_confirmation="johndoe123123";
    const response = await register({
        full_name,
        username,
        email,
        password,
        birthday,
        gender,
        password_confirmation
    });
    await console.log(response);
}

    return(
    <NavigationContainer>
        <Router />
    </NavigationContainer>
//     <View style={styles.container}>
//     <View>
//             <Text>Open up App.js to start working on your app!</Text>
//             <StatusBar style="auto" />
//             <Button title="login()" onPress={() => Login()} />
//             <Button title="AllForum" onPress={() => AllForum()} />
//             <Button title="ForumByID" onPress={() => ForumByID(1)} />
//             <Button title="register" onPress={() => Register()} />
//             <Button title="Like" onPress={() => Like()} />
//             <Button title="Unlike" onPress={() => Unlike()} />
//             <Button title="submitthread" onPress={() => AddThread2()} />
//             <Button title="get_me" onPress={() => Getmydatafromapi()} />
//             <Button title="AddThread" onPress={() => AddThread()} />

// </View>
//         </View> 
    )
};

export default App

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },
})
