import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { FontText } from '../../components';

export default class SelectTypePage extends React.Component {
  state = {
    btnPressStatus: false
  }

  static navigationOptions = {
    title: '',
  };

  goToNaturals = () => {
    const { navigate } = this.props.navigation;
    navigate('Natural', null);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <FontText isBold style={styles.title}>
            Choose disaster type
          </FontText>
        </View>
        <ImageBackground
          style={[styles.backgroundImg, styles.marginBottom]}
          imageStyle={{ borderRadius: 25 }}
          source={require('../../assets/vGWuOec.jpg')}
          blurRadius={3}
        >
          <TouchableOpacity
            activeOpacity={0}
            style={styles.navigationBtn}
            onHideUnderlay={this.onHideOverlay}
            onShowUnderlay={this.onShowUnderlay}
            onPress={this.goToNaturals}
          >
            <FontText style={styles.text}>Natural Disasters</FontText>
          </TouchableOpacity >
        </ImageBackground>
        
        <ImageBackground
          style={[styles.backgroundImg, styles.marginBottom]}
          imageStyle={{ borderRadius: 25 }}
          source={require('../../assets/DkK2YzIX0AEcx9_.jpg')}
          blurRadius={3}
        >
          <TouchableOpacity
            activeOpacity={0}
            style={styles.navigationBtn}
            onHideUnderlay={this.onHideOverlay}
            onShowUnderlay={this.onShowUnderlay}
            onPress={this.goToNaturals}
          >
            <FontText style={styles.text}>Antropogenic Hazards</FontText>
          </TouchableOpacity >
        </ImageBackground>

        <TouchableOpacity style={styles.sosBtn}>
          <FontText style={styles.sostext}>SOS</FontText>
        </TouchableOpacity>
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f2fcff",
    alignItems: "center", 
    flexDirection: "column"
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
    fontSize: 25
  },
  backgroundImg: {
    height: 140,
    width: '80%',
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  navigationBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: 140,
    marginBottom: 20,
    borderRadius:25 
  },
  btnStyle: {
    width: '100%',
    height: '100%'
  }, 
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '700'
  },
  sosBtn: {
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    width: '40%',
    height: '10%',
    marginTop: 15,
    borderRadius: 40
  },
  sostext: {
    fontSize: 40,
    color: "red"
  },
  marginBottom: {
    marginBottom: 40
  }
});