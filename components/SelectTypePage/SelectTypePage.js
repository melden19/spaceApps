import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, ActivityIndicator, Image } from 'react-native';
import Modal from 'react-native-modalbox';
import { FontText } from '../../components';
import { SearchBar, Button } from 'react-native-elements'

export default class SelectTypePage extends React.Component {
  state = {
    loadedImages: [],
    modalIsOpen: false
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  }

  static navigationOptions = {
    title: '',
  };

  goToNaturals = () => {
    const { navigate } = this.props.navigation;
    navigate('Natural', null);
  }

  goToAntropogenic = () => {
    const { navigate } = this.props.navigation;
    navigate('ListFromServer', null);
  }

  render() {
    return true ? (
      <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <FontText isBold style={styles.title}>
          Choose disaster type
        </FontText>
      </View>
      <ImageBackground
        style={[styles.backgroundImg, styles.marginBottom]}
        imageStyle={{ borderRadius: 25 }}
        source={require('../../assets/nature.jpg')}
        blurRadius={3}
        onLoadEnd={this.addToLoaded}
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
        source={require('../../assets/technical.jpg')}
        blurRadius={3}
        onLoad={this.addToLoaded}
      >
        <TouchableOpacity
          activeOpacity={0}
          style={styles.navigationBtn}
          onHideUnderlay={this.onHideOverlay}
          onShowUnderlay={this.onShowUnderlay}
          onPress={this.goToAntropogenic}
        >
          <FontText style={styles.text}>Antropogenic Hazards</FontText>
        </TouchableOpacity >
      </ImageBackground>

      <TouchableOpacity style={styles.sosBtn} onPress={() => this.props.navigation.navigate('CheckboxList', null)}>
        <FontText style={styles.sostext}>Checklist</FontText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sosBtn} onPress={this.toggleModal}>
        <FontText style={styles.sostext}>SOS</FontText>
      </TouchableOpacity>
      <Modal
        style={{width: '80%', height: 170, borderRadius: 30}}
        isOpen={this.state.modalIsOpen}
        onClosed={this.toggleModal}
        >
        <View style={{ width: '100%', height: '100%', alignItems: "center"}}>
          <View style={{ width: 250, marginTop: 30 }}>
            <SearchBar lightTheme/>
            <Button style={{marginTop: 20}} onPress={() => console.log('onPress')} title="Search"/>
          </View>
        </View>
      </Modal>
    </View>
    ) : (
      <ActivityIndicator size="large" color="#0000ff"/>
    )
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
    fontWeight: '700',
    textAlign: 'center'
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
  searchBar: {
    width: 400
  },
  marginBottom: {
    marginBottom: 40
  }
});