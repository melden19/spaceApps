import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, TextInput, Button, Keyboard } from 'react-native';
import { FontText } from '../../components';
export default class Reg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: '',
      pass: '',
      keyBoardActive: false
    };
  }

  _keyboardDidShow = () => {
    this.setState({
      keyBoardActive: true
    })  
  }

  _keyboardDidHide = () => {
    this.setState({
      keyBoardActive: false
    })
  }

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={[styles.innercontainer, this.state.keyBoardActive ? styles.focusedInput : styles.innercontainer]}>
          <View style={styles.inputbox}>
            <FontText style={styles.textstyle}>Email</FontText>
            <TextInput
            style={styles.inputstyle}
            placeholder=""
            onChangeText={(log) => this.setState({log})}
          />
          </View>
          <View style={styles.inputbox}>
            <FontText style={styles.textstyle}>Password</FontText>
            <TextInput
            style={styles.inputstyle}
            placeholder=""
            onChangeText={(pass) => this.setState({pass})}
          />
          </View>
          <View style={[styles.inputbox, { borderBottomWidth: 0 }]}>
            <Button
            title="Sign up"
            onPress={() =>
              navigate('SelectType', { someData: 'data' })
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
  inputstyle: {
    width:200,
    padding: 7,
    fontSize: 20,
  },
  focusedInput: {
    position: "relative",    
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 220,
    marginBottom: 170,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e6e6e6"
  },
  textstyle: {
    fontSize: 20,
  },
  inputbox: {
    borderBottomColor: 'lightblue',
    borderBottomWidth: 1, 
    position: "relative",    
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  },  
});