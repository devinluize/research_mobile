import React, { useState } from 'react';
import {Image, TouchableOpacity, StyleSheet, View, Text, TextInput, FlatList, SafeAreaView, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const NewThread = ({navigation}) => {

  const [likes, setLikes] = useState(0);
  const handleForum = () => {
    navigation.navigate('Forum');
  }
  const handleLike = () => {
    setLikes(likes + 1);
  };
  const data = [
    {
      id: 1,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    
    // Tambahkan data lainnya jika diperlukan
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.threadContainer}>
      <Text style={styles.titleText}>{item.title}</Text>
      <View style={styles.bottomTittleText}>
        <Image source={require('../assets/Forum1.png')} />
        <Text style={styles.name}>{item.author}</Text>
        <Image
          source={require('../assets/Forum2.png')}
          styles={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text style={styles.messageContainer}>
        <Text>{item.title}</Text>
        <Text>{item.message}</Text>
        <Text>{item.image}</Text>
      </Text>
      <View style={styles.likeCommentContainer}>
        <View style={styles.likeContainer}>
          <TouchableOpacity onPress={handleLike}>
            <Image
              source={require('../assets/Like.png')}
              style={styles.imageLike}
            />
          </TouchableOpacity>
          <Text>{likes}</Text>
        </View>
        <View style={styles.commentContainer}>
          <TouchableOpacity onPress={handleLike}>
            <Image
              source={require('../assets/Comment.png')}
              style={styles.imageComment}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.text}>Discussion Forum</Text>
        </View>
        <View style={styles.rightContainer}>
          {/* <TouchableOpacity
            style={styles.boxNewThread}
          >
            <Text style={styles.newThread}>New Thread</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      <View style={styles.line} />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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