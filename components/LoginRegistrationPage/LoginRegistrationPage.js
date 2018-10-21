import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, TextInput, Button, Keyboard } from 'react-native';
import { FontText } from '../../components';
export default class LogReg extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <View style={styles.inputbox}>
            <Button style={styles.buttonstyle}
            title="Sign in"
            onPress={() =>
              navigate('Login', { someData: 'data' })
            }
          />
        </View>
        <View style={styles.inputbox}>
            <Button style={styles.buttonstyle}
            title="Sign up"
            onPress={() =>
              navigate('Reg', { someData: 'data' })
            }
          />
        </View> 
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
    justifyContent: "center"
  },
  innercontainer: {
    position: "relative",    
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 220,
    marginBottom: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e6e6e6"
  },
  textstyle: {
    fontSize: 20,
  },
  inputbox: {
    justifyContent: "center",
   
    width: 150,
    height: 70
  }, 
});