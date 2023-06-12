import React, { useContext, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { getAllForum } from '../ForumApi';
const Forum = ({ navigation }) => {
  const route = useRoute();
  const newEntry = route.params?.newEntry;
  const { title, message, image } = newEntry || {};
  const handleNewThread = () => {
    navigation.navigate('NewThread',{
      itemId: 2,
    });
  };

  const handleThread = (id) => {
    navigation.navigate('Thread',{
      ThreadId:id,
    });
  };

  const [likes, setLikes] = useState(0);
  const [counter,setCounter] = useState(0);
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const [data2,setData] = useState([
    {
      id: 1,
      title: 'Eco-Enzyme as Disinfectant1231312',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 2,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 3,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 4,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 5,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 6,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 7,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
  ])
  const data = [
    {
      id: 1,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 2,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 3,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 4,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 5,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 6,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },
    {
      id: 7,
      title: 'Eco-Enzyme as Disinfectant',
      author: 'Devin Suhandi',
      date: '3 Juni 2023 20:00 PM',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'Image Source',
    },

    // Tambahkan data lainnya jika diperlukan
  ];
  const AllForum = async () => {
    const response = await getAllForum();
    setData(response);
    await console.log(response);
}
console.log(counter)
if(counter==0){
  console.log("dakjbdasj");
  setCounter(counter+1);
  AllForum();
}
console.log("ini id data",data2);
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.threadContainer} onPress={()=>handleThread(item.id)}>
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
          <TouchableOpacity
            style={styles.boxNewThread}
            onPress={handleNewThread}
          >
            <Text style={styles.newThread}>New Thread</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <FlatList
        data={data2}
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 30,
  },
  boxNewThread: {
    backgroundColor: '#3E8B65',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 5,
  },
  newThread: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#D9D9D9',
    marginTop: 15,
  },
  bottomTittleText: {
    flexDirection: 'row',
  },
  threadContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: 'rgba(62, 139, 101, 0.2)',
  },
  likeCommentContainer: {
    flexDirection: 'row',
  },
  likeContainer: {
    flexDirection: 'row',
  },
  commentContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 3,
  },
});

export default Forum;
