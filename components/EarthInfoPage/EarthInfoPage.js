import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, TextInput, Button, Keyboard, ScrollView } from 'react-native';
import { FontText } from '../../components';
export default class LogReg extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <FontText isBold style={styles.title}>
            Earthquake
          </FontText>
        </View>
        <View style={styles.topcontainer}>      
        <ImageBackground
        style={styles.backgroundImg}
        imageStyle={{ borderRadius: 5 }}
        source={require('../../assets/earth1.jpg')}
        onLoad={this.addToLoaded}
      >      
      </ImageBackground>   
      <View style={styles.textcontainer}>
      <Text>An earthquake (also known as a quake, tremor or temblor) is the shaking of the surface of the Earth,
resulting from the sudden release of energy in the Earth's lithosphere that creates seismic waves. 
Earthquakes can range in size from those that are so weak that they cannot be felt to those violent 
enough to toss people around and destroy whole cities.</Text>
      </View>
        </View>    
        <View style={styles.botcontainer}>  
        <ScrollView>
        <View style={styles.titlecontainer}>
          <FontText style={styles.title}>
          If Shaking Begins
          </FontText>
        </View> 
          <Text>• Drop down; take cover under a desk or table and hold on.</Text>
          <Text>• Stay indoors until the shaking stops and you're sure it's safe to exit.</Text>
          <Text>• Stay away from bookcases or furniture that can fall on you.</Text>
          <Text>• Stay away from windows. In a high-rise building, expect the fire alarms and sprinklers to go off during a quake.</Text>
          <Text>• If you are in bed, hold on and stay there, protecting your head with a pillow.</Text>
          <Text>• If you are outdoors, find a clear spot away from buildings, trees, and power lines. Drop to the ground.</Text>
          <Text>• If you are in a car, slow down and drive to a clear place. Stay in the car until the shaking stops.</Text>
          </ScrollView>
        </View>    
      </View> 
    )
  }
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f2fcff",
    alignItems: "center", 
    flexDirection: "column",
  },
  titlecontainer:{
    
    marginTop: 3,
    justifyContent: "center",
    alignItems: "center",
    width: '95%',
    marginBottom: 10,
  
  },
  title: {
    fontSize: 25
  },
  topcontainer: {
    position: "relative",    
    alignItems: "center", 
    flexDirection: "column",
    justifyContent: "center",
    width: '95%',
    height: 300,
    marginBottom: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e6e6e6"
  },
  botcontainer: {
    position: "relative",    
    alignItems: "center",
    width: '95%',
    height: 200,
    marginBottom: 3,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e6e6e6"
  },
  textstyle: {
    fontSize: 20,
  },
  backgroundImg: {
    height: 150,
    width: '95%',
  },
 textcontainer: {
   height: 145,
   width: '95%',
   marginLeft: 2
 }
});