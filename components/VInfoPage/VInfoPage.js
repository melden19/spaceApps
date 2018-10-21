import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, TextInput, Button, Keyboard, ScrollView } from 'react-native';
import { FontText } from '../../components';
export default class VInfo extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <FontText isBold style={styles.title}>
          Volcanic Eruption
          </FontText>
        </View>
        <View style={styles.topcontainer}>      
        <ImageBackground
        style={styles.backgroundImg}
        imageStyle={{ borderRadius: 5 }}
        source={require('../../assets/v1.jpg')}
        onLoad={this.addToLoaded}
      >      
      </ImageBackground>   
      <View style={styles.textcontainer}>
      <Text>A volcanic eruption occurs when hot materials from the earth's interior are thrown out of a volcano.
 Lava, rocks, dust, and gas compounds are some of these "ejecta".
Eruptions can come from side branches or from the top of the volcano.
 Some eruptions are terrible explosions that throw out huge amounts of rock and volcanic ash and kill many people.
 Some are quiet outflows of hot lava. </Text>
      </View>
        </View>    
        <View style={styles.botcontainer}>  
        <ScrollView>
        <View style={styles.titlecontainer}>
          <FontText style={styles.title}>
          Safety Tips
          </FontText>
        </View> 
          <Text>• As much as possible, stay away from active volcanoes.</Text>
          <Text>• If you live near an active volcano, keep goggles and a mask in an emergency kit, along with a flashlight and a working, battery-operated radio.</Text>
          <Text>• Know your evacuation route. Keep gas in your car.</Text>
          <Text>• Evacuate only as recommended by authorities to stay clear of lava, mud flows, and flying rocks and debris.</Text>
          <Text>• Avoid river areas and low-lying regions.</Text>
          <Text>• Before you leave the house, change into long-sleeved shirts and long pants and use goggles or eyeglasses, not contacts. Wear an emergency mask or hold a damp cloth over your face.</Text>
          <Text>• If you are not evacuating, close windows and doors and block chimneys and other vents, to prevent ash from coming into the house.</Text>
          <Text>• Be aware that ash may put excess weight on your roof and need to be swept away. Wear protection during cleanups.</Text>
          <Text>• Ash can damage engines and metal parts, so avoid driving. If you must drive, stay below 35 miles (56 kilometers) an hour.</Text>
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