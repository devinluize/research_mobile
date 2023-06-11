import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, SafeAreaView, StatusBar, Button } from 'react-native';

const NewThread = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const addEntry = () => {
    if (title && message) {
      const newEntry = { title, message };
      setEntries((prevEntries) => [...prevEntries, newEntry]);
      setTitle('');
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>Post New Thread</Text>
        </View>
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
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Title"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input2}
          onChangeText={setMessage}
          value={message}
          placeholder="Message"
          multiline={true}
        />
      </View>

      <Button style ={styles.buttonPost} title="Post" onPress={addEntry} />
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
  entryMessage: {},
  inputContainer: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  inputContainer2: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: '100%',
  },
  input2: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    width: '100%',
    height: '60%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonPost:{
      backgroundColor: '#3E8B65',
  }
});

export default NewThread;
