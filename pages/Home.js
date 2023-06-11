import React from 'react';
import { Image, Text, ScrollView, StyleSheet, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

const handleCalculator = () => {
  // Tambahkan logika autentikasi di sini

  navigation.navigate('Calculator');
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Image
            source={require('../assets/Logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Hi, John</Text>
            <Text style={styles.text2}>Learn more through EcoLab!</Text>
          </View>
        </View>

        <View style={styles.textContainer2}>
          <Text style={styles.textC1}>What is Eco-Enzyme?</Text>
          <Text style={styles.textC2}>Eco-enzyme is a revolutionary and natural solution for the food waste problem that embodies the power of beneficial enzymes. 
          Eco-enzyme is a liquid produced from the fermentation of organic kitchen waste, including fruit peels and vegetable scraps, combine with sugar and water with 3:1:10 ratio.  
          By understanding the knowledge behind Eco-Enzyme, we unlock the potential to transform waste into valuable resources, paving the way for a greener and more sustainable future.</Text>
        </View>

        <View style={styles.textContainer3}>
          <Text style={styles.textC1}>What is Eco-Enzyme?</Text>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={require('../assets/image1.png')}
              style={styles.leftImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.topRightContainer}>
              <Image
                source={require('../assets/image2.png')}
                style={styles.topRightImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.bottomRightContainer}>
              <Image
                source={require('../assets/image3.png')}
                style={styles.bottomRightImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <View style={styles.textContainer4}>
            <Text style={styles.textCC1}>How to Use Eco Enzyme?</Text>
            <Image source={require('../assets/image4.png')}
              style={styles.image4}
              resizeMode="contain"/>
        </View>
        <View style={[styles.bottomsContainer, { justifyContent: 'center' }]}>
          <View style={styles.bottomContainer}>
            <View style={styles.leftBottomContainer}>
              <Image
                source={require('../assets/number1.png')}
                style={styles.numberImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.rightBottomContainer}>
              <Text style={styles.descriptionText}>In a container, mix the organic kitchen waste, water, and sugar with 3:10:1 ratio until well combined. 
              You can use tap water, well water, air conditioning waste water, or mineral water. For the sugar source, you can use brown sugar, coconut sugar, or molasses.</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.leftBottomContainer}>
              <Image
                source={require('../assets/number2.png')}
                style={styles.numberImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.rightBottomContainer}>
              <Text style={styles.descriptionText}>Let the mixture be fermented for a minimum of 3 months. 
              In the first month, alcohol will be produced. In the second month, vinegar will be produced. Finally, in the third month, the enzyme wil be produced.</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.leftBottomContainer}>
              <Image
                source={require('../assets/number3.png')}
                style={styles.numberImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.rightBottomContainer}>
              <Text style={styles.descriptionText}>After 3 months, the eco-enzyme can be harvested by filtering the fermented mixture. 
              The residue from the filtering process can be used to make eco-enzyme-based compost.</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomText}>
          <TouchableOpacity style={styles.button} onPress={handleCalculator}>
            <Text style={styles.buttonText}>Try Eco Enzyme Calculator</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
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
    height: '15%',
    width: '100%',
    backgroundColor: '#BCDEC9',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  image: {
    width: '30%',
    height: '20%',
    marginTop: 20,
    marginLeft: 10,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  text1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  textContainer2: {
    marginLeft: 10,
    marginBottom: 20,
  },
  textC1: {
    fontSize: 20,
    color: '#3E8B65',
    fontWeight: 'bold',
  },
  textCC1: {
    fontSize: 20,
    color: '#3E8B65',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textC2: {
    fontSize: 14,
    marginTop: 5,
  },
  textContainer3: {
    marginLeft: 10,
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    height: 200,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  leftImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginLeft: 20,
  },
  topRightContainer: {
    flex: 1,
  },
  bottomRightContainer: {
    flex: 1,
    marginTop: 10,
  },
  topRightImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bottomRightImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textContainer4: {
    marginBottom: 20,
    marginTop: 10,
  },
  image4:{
    marginTop: 10,
    justifyContent:'center',
    alignSelf:'center',
  },
  bottomsContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '90%',
    backgroundColor: '#BCDEC9',
    alignContent:'center',
    alignSelf:'center',
    borderRadius: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    width: '90%',
  },
  leftBottomContainer: {
    marginRight: 10,
  },
  rightBottomContainer: {
    flex: 1,
  },
  numberImage: {
    width: 20,
    height: 20,
  },
  descriptionText: {
    fontSize: 14,
  },
  bottomText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3E8B65',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Home;
