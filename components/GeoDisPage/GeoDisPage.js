import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { FontText } from '../../components';
export default class GeoDis extends Component {
  state = {
    btnPressStatus: false
  }

  static navigationOptions = {
    title: '',
  };

  goToV = () => {
    const { navigate } = this.props.navigation;
    navigate('VInf', null);
  }
  goToGeo = () => {
    const { navigate } = this.props.navigation;
    navigate('GeoD', null);
  }
  goToEarth = () => {
    const { navigate } = this.props.navigation;
    navigate('EInf', null);
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f2fcff'}}>
      <View style={styles.container}>

        <View style={styles.titlecontainer}>
          <FontText isBold style={styles.title}>
            Geological disasters
          </FontText>  
          <View style={styles.undline}>
          </View>
        </View>

        <ImageBackground
          style={[styles.backgroundImg, styles.marginBottom]}
          imageStyle={{ borderRadius: 25 }}
          source={require('../../assets/sinkhole.jpg')}
          blurRadius={2}
        >
          <TouchableOpacity
            activeOpacity={0}
            style={styles.navigationBtn}
            onHideUnderlay={this.onHideOverlay}
            onShowUnderlay={this.onShowUnderlay}
            onPress={this.goToGeo}
          >
            <FontText style={styles.text}>Sinkhole</FontText>
          </TouchableOpacity >
        </ImageBackground>
        
        <ImageBackground
          style={[styles.backgroundImg, styles.marginBottom]}
          imageStyle={{ borderRadius: 25 }}
          source={require('../../assets/earthquake.jpg')}
          blurRadius={2}
        >
          <TouchableOpacity
            activeOpacity={0}
            style={styles.navigationBtn}
            onHideUnderlay={this.onHideOverlay}
            onShowUnderlay={this.onShowUnderlay}
            onPress={this.goToEarth}
          >
            <FontText style={styles.text}>Earthquake</FontText>
          </TouchableOpacity >
        </ImageBackground>     


        <ImageBackground
          style={[styles.backgroundImg, styles.marginBottom]}
          imageStyle={{ borderRadius: 25 }}
          source={require('../../assets/landslide.jpg')}
          blurRadius={2}
        >
          <TouchableOpacity
            activeOpacity={0}
            style={styles.navigationBtn}
            onHideUnderlay={this.onHideOverlay}
            onShowUnderlay={this.onShowUnderlay}
            onPress={this.goToGeo}
          >
            <FontText style={styles.text}>Landslide</FontText>        
          </TouchableOpacity >
        </ImageBackground>
        
        <ImageBackground
          style={[styles.backgroundImg, styles.marginBottom]}
          imageStyle={{ borderRadius: 25 }}
          source={require('../../assets/volcanic.jpg')}
          blurRadius={2}
        >
          <TouchableOpacity
            activeOpacity={0}
            style={styles.navigationBtn}
            onHideUnderlay={this.onHideOverlay}
            onShowUnderlay={this.onShowUnderlay}
            onPress={this.goToV}
          >
            <FontText style={styles.text}>Volcanic Eruption</FontText>
          </TouchableOpacity >
        </ImageBackground>    

         <ImageBackground
          style={[styles.backgroundImg, styles.marginBottom]}
          imageStyle={{ borderRadius: 25 }}
          source={require('../../assets/mudflow.jpg')}
          blurRadius={2}
        >
          <TouchableOpacity
            activeOpacity={0}
            style={styles.navigationBtn}
            onHideUnderlay={this.onHideOverlay}
            onShowUnderlay={this.onShowUnderlay}
            onPress={this.goToGeo}
          >
            <FontText style={styles.text}>Mudflow</FontText>
          </TouchableOpacity >
        </ImageBackground>    
       
      </View>
      </ScrollView>
    );
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
    position: "relative",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
    height: 50,
    marginBottom: 20,
  },
  undline: {
    position: "relative",
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
    width: '90%',
    height: 1,
    backgroundColor: "#B4D0DD"
    
  },
  title: {
    fontSize: 30,
    fontWeight: '700'
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
    height: 140
  }, 
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '700'
  },
  marginBottom: {
    marginBottom: 40
  }
});
