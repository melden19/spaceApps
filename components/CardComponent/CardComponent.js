import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { FontText } from '../../components';

export default class CardComponent extends Component {
  render() {
    const { image } = this.props;
    return (
      <ImageBackground
        style={styles.backgroundImg}
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
    )
  }
}

const styles = StyleSheet.create({
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
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center'
  }
});