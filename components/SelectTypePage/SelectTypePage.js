import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

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

  onHideOverlay = () => {
    this.setState({
      btnPressStatus: false
    });
  }

  onShowOverlay = () => {
    this.setState({
      btnPressStatus: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            What happened?
          </Text>
        </View>
        <ImageBackground
          style={[styles.backgroundImg, styles.marginBottom]}
          imageStyle={{ borderRadius: 25 }}
          source={require('../../assets/vGWuOec.jpg')}
          blurRadius={3}
        >
          <TouchableOpacity
            activeOpacity={0}
            style={this.state.btnPressStatus ? { ...styles.navigationBtn, backgroundColor: 'rgba(0, 0, 0, 0)' } : styles.navigationBtn}
            onHideUnderlay={this.onHideOverlay}
            onShowUnderlay={this.onShowUnderlay}
            onPress={this.goToNaturals}
          >
            <Text style={styles.text}>Natural Disaster</Text>
          </TouchableOpacity >
        </ImageBackground>
        
        <ImageBackground
          style={styles.backgroundImg}
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
            <Text style={styles.text}>Natural Disaster</Text>
          </TouchableOpacity >
        </ImageBackground>

        <TouchableOpacity style={styles.sosBtn}>
          <Text style={styles.sostext}>SOS</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
 

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#c9efff",
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
    fontSize: 30,
    fontWeight: '700'
  },
  backgroundImg: {
    height: '25%',
    width: '80%',
    borderRadius: 5
  },
  navigationBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%',
    marginBottom: 20,
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
    marginTop: 60,
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