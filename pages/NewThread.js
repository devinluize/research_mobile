import React, { useState } from 'react';
import {Image, TouchableOpacity, StyleSheet, View, Text, TextInput, SafeAreaView, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { addThreadToForum } from '../ForumApi';


const NewThread = ({navigation}) => {
//   const [entries, setEntries] = useState([]);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [image, setImage] = useState('');
    // const navigation = useNavigation();
    const [forum, setForum] = useState({
      title: "Pengumpulan Tugas 1",
      message:"Halo semua, ini adalah thread untuk pengumpulan tugas 1",
      image:"https://fastly.picsum.photos/id/220/200/300.jpg?hmac=XQWeukbBSi6WSlgZllfOJjG8AQQXS9dYI8IqvKpE1ss",
    });
  const AddThread = async () => {
    const response = await addThreadToForum(forum);
    await console.log(response);
}
    const addEntry = () => {
        if (title && message) {
          const newEntry = { title, message, image };;
          setTitle('');
          setMessage('');
          setImage('');
          navigation.navigate('Forum', {newEntry: newEntry});
        }
      };
    

  const handleForum = () => {
    navigation.navigate('Forum');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.leftContainer} onPress = {handleForum}>
            <Image source = {require('../assets/Arrow.png')}/>
            <Text style={styles.text}>Post New Thread</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      {/* <FlatList
        data={entries}
        renderItem={({ item }) => (
          <View style={styles.entryContainer}>
            <Text style={styles.entryTitle}>{item.title}</Text>
            <Text style={styles.entryMessage}>{item.message}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      /> */}

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Thread Title"
        />
      </View>

      <View style={styles.inputContainer2}>
        <Text style={styles.label}>Message</Text>
        <View style={styles.messageContainer}>
          <TextInput
            style={styles.input2}
            onChangeText={setMessage}
            value={message}
            placeholder="Thread Message"
            multiline={true}
          />
        </View>
      </View>

      <View style={styles.inputContainer3}>
        <Text style={styles.label2}>Image</Text>
        <TextInput
          style={styles.input3}
          onChangeText={setImage}
          value={image}
          placeholder="Thread Image"
          multiline={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPost} onPress={addEntry}>
          <Text style={styles.buttonText}>Post Thread</Text>
        </TouchableOpacity>
        <Button title="submitthread" onPress={() => AddThread()} />
      </View>
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
  entryContainer: {
    marginBottom: 8,
  },
  entryTitle: {
    fontWeight: 'bold',
  },
  inputContainer: {
    marginHorizontal: 20,
    marginBottom: 8,
    borderRadius: 5,
  },
  inputContainer2: {
    marginHorizontal: 20,
    marginBottom: 0,
    flex: 0.5, // Set the flex to 1
    borderRadius: 5,
  },
  inputContainer3: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    borderRadius: 5,
  },
  label2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    borderRadius: 5,
    marginBottom: 8,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: '100%',
    borderRadius: 5,
  },
  input2: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginTop: 8,
    textAlignVertical: 'top',
    borderRadius: 5,
    flex: 1, // Set the flex to 1
  },
  input3: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: '100%',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonPost: {
    backgroundColor: '#3E8B65',
    width: '40%',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: 'center'
  },
  messageContainer: {
    flex: 1,
  },
});

export default NewThread;