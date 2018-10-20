import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class NaturalHazardStyle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            Some Title
          </Text>
        </View>
        <View style={styles.navigationBtn}><Text style={styles.text}>Natural</Text></View>
        <View style={styles.navigationBtn}><Text style={styles.text}>Technical</Text></View>
        <View style={styles.sosBtn}><Text style={styles.sostext}>SOS</Text></View>
        {/* <View style={{ ...styles.navigationBtn, ...styles.SOSBtn}}>SOS</View> */}
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
   
    width: "100%",
    height: "100%",
    backgroundColor: "#FADCA3",
    alignItems: "center",
    flexDirection: "column",
    borderWidth: 2
  },
  titlecontainer:{
    position: "relative",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
    height: 50,
    
    marginBottom: 20,
   
  },
  title: {
    fontSize: 40
  },
  navigationBtn: {
    borderWidth: 2,
    backgroundColor: 'lightgrey',
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
    height: '25%',
    marginBottom: 20,
    borderRadius: 15
  },
  text: {
    fontSize: 30
  },
  sosBtn: {
    borderWidth: 2,
    backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
    width: '40%',
    height: '10%',
    marginTop: 60,
    borderRadius: 40
  },
  sostext: {
    fontSize: 40,
    color: "white"
   
  }
});
