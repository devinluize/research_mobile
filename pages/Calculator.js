import React, { useState, useEffect } from 'react';
import { Image, Text, ScrollView, StyleSheet, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const [Enzyme, setEnzyme] = useState('');
  const [totalWaste, setTotalWaste] = useState('');
  const [Water, setWater] = useState('');
  const [Sugar, setSugar] = useState('');
  const updateValues = (enzymeValue, wasteValue, waterValue, sugarValue) => {
    setEnzyme(enzymeValue);
    setTotalWaste(wasteValue);
    setWater(waterValue);
    setSugar(sugarValue);
  };

  const handleEnzymeChange = (value) => {
    const enzymeAmount = parseFloat(value);
    const waterAmount = (enzymeAmount * 6) / 10;
    const wasteAmount = (waterAmount * 3) / 10;
    const sugarAmount = (waterAmount * 1) / 10;
  
    if (isNaN(enzymeAmount)) {
      setEnzyme('');
      setTotalWaste('');
      setWater('');
      setSugar('');
    } else {
      setWater(waterAmount.toFixed(2).toString());
      setTotalWaste(wasteAmount.toFixed(2).toString());
      setSugar(sugarAmount.toFixed(2).toString());
  
      updateValues(value, wasteAmount.toFixed(2).toString(), waterAmount.toFixed(2).toString(), sugarAmount.toFixed(2).toString());
    }
  };

  const handleWasteChange = (value) => {
    const wasteAmount = parseFloat(value);
    const waterAmount = (wasteAmount * 10) / 3;
    const enzymeAmount = (waterAmount * 10) / 6;
    const sugarAmount = (wasteAmount * 1) / 3;

    if (isNaN(enzymeAmount)) {
      setEnzyme('');
      setTotalWaste('');
      setWater('');
      setSugar('');
    } else {
    setWater(waterAmount.toFixed(2).toString());
    setEnzyme(enzymeAmount.toFixed(2).toString());
    setSugar(sugarAmount.toFixed(2).toString());

    updateValues(enzymeAmount.toFixed(2).toString(), value, waterAmount.toFixed(2).toString(), sugarAmount.toFixed(2).toString());
    }
  };

  const handleWaterChange = (value) => {
    const waterAmount = parseFloat(value);
    const wasteAmount = (waterAmount * 3) / 10;
    const enzymeAmount = (waterAmount * 10) / 6;
    const sugarAmount = (waterAmount * 1) / 10;

    if (isNaN(enzymeAmount)) {
      setEnzyme('');
      setTotalWaste('');
      setWater('');
      setSugar('');
    } else {
    setTotalWaste(wasteAmount.toFixed(2).toString());
    setEnzyme(enzymeAmount.toFixed(2).toString());
    setSugar(sugarAmount.toFixed(2).toString());

    updateValues(enzymeAmount.toFixed(2).toString(), wasteAmount.toFixed(2).toString(), value, sugarAmount.toFixed(2).toString());
    }
  };

  const handleSugarChange = (value) => {
    const sugarAmount = parseFloat(value);
    const wasteAmount = sugarAmount * 3;
    const waterAmount = sugarAmount * 10;
    const enzymeAmount = (waterAmount * 10) / 6;

    if (isNaN(enzymeAmount)) {
      setEnzyme('');
      setTotalWaste('');
      setWater('');
      setSugar('');
    } else {
    setTotalWaste(wasteAmount.toFixed(2).toString());
    setWater(waterAmount.toFixed(2).toString());
    setEnzyme(enzymeAmount.toFixed(2).toString());

    updateValues(enzymeAmount.toFixed(2).toString(), wasteAmount.toFixed(2).toString(), waterAmount.toFixed(2).toString(), value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Eco Enzyme Calculator</Text>
        </View>
        <View style={styles.topContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>
              Welcome to our {'\n'} Eco Enzyme Calculator!</Text>
            <Text style={styles.text2}>
            Our Eco Enzyme Calculator is a powerful tool {'\n'} 
            designed to help you determine the precise {'\n'}
            measurements of ingredients needed to {'\n'}
            create your own eco enzyme solution. By {'\n'}
            inputting a detail, such as the desired volume {'\n'}
            of eco enzyme, weight of the waste, water {'\n'}
            volume, or weight of sugar, our calculator will{'\n'}
            generate accurate measurements tailored to {'\n'}
            your requirements.</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/gambar1.png')}
            style={styles.Image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer2}>
          <Text style={styles.textC1}> Calculator Guide</Text>
          <Text style={styles.blackText}>
            Choose to input one of these details: {'\n'}
            </Text>
            <View style={styles.viewText}>
              <Text style={styles.dotText}>
            • <Text style={styles.greenText}> Eco-Enzyme Volume:</Text> Select the desired production volume in Liter to determine ingredient quantities. {'\n'}
            • <Text style={styles.greenText}> Total Waste:</Text> Input the amount of food waste you have in kg. We suggest you to use 80% fruit waste and 20% vegetable waste. {'\n'}
            • <Text style={styles.greenText}> Water Volume:</Text> Water Volume: Input the amount of water in Liter. {'\n'}
            • <Text style={styles.greenText}> Sugar:</Text> Input the amount of sugar in kg.
            </Text>
            </View>
        </View>

        <View style={styles.textContainer3}>
          <Text style={styles.textC1}>Calculate Yours!</Text>
        </View>
        <View>
              {Enzyme !== '' && (
                <View style={styles.imageContainer1}>
                  <Image
                    source={require('../assets/Volume.png')}
                    style={styles.Image1}
                    resizeMode="stretch"
                  />
                  <Text style={styles.textOnImage}>{`${Enzyme} L`}</Text>
                </View>
              )}
              {totalWaste !== '' && (
                <View style={styles.imageContainer1}>
                  <Image
                    source={require('../assets/totalWaste.png')}
                    style={styles.Image1}
                    resizeMode="stretch"
                  />
                  <Text style={styles.textOnImage1}>{`${totalWaste} kg`}</Text>
                </View>
              )}
              {Water !== '' && (
                <View style={styles.imageContainer1}>
                  <Image
                    source={require('../assets/waterVolume.png')}
                    style={styles.Image1}
                    resizeMode="stretch"
                  />
                  <Text style={styles.textOnImage2}>{`${Water} L`}</Text>
                </View>
              )}
              {Sugar !== '' && (
                <View style={styles.imageContainer1}>
                  <Image
                    source={require('../assets/Sugar.png')}
                    style={styles.Image1}
                    resizeMode="stretch"
                  />
                  <Text style={styles.textOnImage3}>{`${Sugar} kg`}</Text>
                </View>
              )}
            </View>
        <View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Eco-Enzyme Volume</Text>
            <TextInput
              style={styles.input}
              placeholder="Input container volume in Liter"
              value={Enzyme}
              onChangeText={handleEnzymeChange}

            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Total Waste</Text>
            <TextInput
              style={styles.input}
              placeholder="Input weight of the waste in kg"
              value={totalWaste}
              onChangeText={handleWasteChange}

            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Water Volume</Text>
            <TextInput
              style={styles.input}
              placeholder="Input water volume in Liter"
              value={Water}
              onChangeText={handleWaterChange}

            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Sugar</Text>
            <TextInput
              style={styles.input}
              placeholder="Input weight of sugar in kg"
              value={Sugar}
              onChangeText={handleSugarChange}

            />
          </View>
        {/* <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity> */}
        </View>     
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  topContainer: {
    height: 270,
    width: '100%',
    backgroundColor: 'rgba(62, 139, 101, 0.2)',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 13,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3E8B65',
  },
  text2: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'regular',
    color: '#204B38',
    marginTop: 12,
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
  greenText: {
    fontSize: 14,
    color: '#3E8B65',
    fontWeight: 'bold',
  },
  viewText:{
    marginTop: -18,
    marginLeft: 16,
    fontWeight:'medium',
  },
  dotText: {
    fontSize: 14,
    fontWeight:'medium',
  },
  blackText: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 8,
  },
  textContainer3: {
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    height: 200,
    alignSelf: 'center',
  },
  imageContainer1: {
    flexDirection: 'row',
    height: 40,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  Image1: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',

  },
  textOnImage: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#204B38',
    fontWeight: 'bold',
  },
  textOnImage1: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  textOnImage2: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#204B38',
    fontWeight: 'bold',
  },
  textOnImage3: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#3E8B65',
    fontWeight: 'bold',
  },
  Image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#3E8B65',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 150,
    marginTop: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  clearText: {
    color: 'blue',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Home;
