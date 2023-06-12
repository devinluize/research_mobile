import React, { useState } from 'react';
import {Image, TouchableOpacity, StyleSheet, View, Text, TextInput, FlatList, SafeAreaView, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getForumByID ,getAllForum, likeThread} from '../ForumApi';
import { useEffect } from 'react';
import { addCommentToThread } from '../ForumApi';
import { HasManyComment } from '../ForumApi';
import { addThreadToForum } from '../ForumApi';

const NewThread = ({navigation}) => {
  const route = useRoute();
const { ThreadId } = route.params;
  const [likes, setLikes] = useState(0);
  const handleForum = () => {
    navigation.navigate('Forum');
  }
  const [counter,setCounter]=useState(0)

  const handleLike = () => {
    setLikes(likes + 1);
  };
  

// console.log(counter)
// if(counter==0){
//   console.log("dakjbdasj");
//   setCounter(counter+1);
//   ForumByID(1);
// }
// setCounter(counter+1);
const [data2,setData]=useState([
  {

    id: 1,
    title: 'Eco-Enzyme as Disinf123123ectant1231312',
    // author: 'Devin Suhandwi',
    // date: '3 Juni 2023 20:00 PM',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // image: 'Image Source',
  },
  {

    id: 2,
    title: 'dasdasd',
    // author: ' devinasdasda data2',
    // date: '3 Juni 2023 20:00 PM',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // image: 'Image Source',
  },
])

const ForumByID = async (id) => {
  const response = await getForumByID(id);
  await console.log(response.data);
  // data = response;
  setData(response);
  // return response;
}
// await console.log(counter)

// useEffect(() => {
//   // data2.forEach(item => {
//   //   console.log("this is item title",item.title);
//   // });
//   if(counter<8){
//     console.log("dakjbdasj");
//     setCounter(counter+1);
//     ForumByID(ThreadId);
//   }
// }, []);
  if(counter<8){
    console.log("dakjbdasj");
    setCounter(counter+1);
    ForumByID(ThreadId);
  }
  const hasmany = async (id) => {
    const response = await HasManyComment(id);
    await console.log(response);

}

const add_comment = async (id)=>{
  const thread_id=id;
  const comment = "dummy message";

  const response=  await addCommentToThread(thread_id,{
    comment,
  });
  await console.log(comment);
}

const AddThread = async () => {
  const response = await addThreadToForum(forum);
  await console.log(response);
}

const Like = async () => {
  const id_thread = 29
    const response = await likeThread({
      id_thread,
    });
    await console.log(response);
}

    // // Tambahkan data lainnya jika diperlukan
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.threadContainer}>
      <Text style={styles.titleText}>{item.title}1231231231232</Text>
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
  const titles = data2.map(obj => obj.title);
  console.log("this is title map",titles[ThreadId-1]); 
  const idd = data2.map(obj => obj.id);
  console.log("this is id map",idd[ThreadId-1]); 
  const message = data2.map(obj => obj.message);
  console.log("this is message map",message[ThreadId-1]); 
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
          <Text>{titles[ThreadId-1]}</Text>
          
      {/* <FlatList
        data={data2[0]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      /> */}
      <Text>this</Text>
      <Button title="ADD COMMENT" onPress={() => add_comment(ThreadId)} />
      <Button title="hasmanycomment" onPress={() => hasmany(ThreadId)} />
      <Button title="Like" onPress={() => Like(ThreadId)} />
    </SafeAreaView>

  );
};
const AddThread = async () => {
  const response = await addThreadToForum({
    
  });
  await console.log(response);
}

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