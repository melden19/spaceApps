import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';


export default class NaturalHazardStyle extends Component {
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
      <ScrollView>
      <View style={styles.container}>

        <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            Natural disasters
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
            style={styles.navigationBtn}
            onHideUnderlay={this.onHideOverlay}
            onShowUnderlay={this.onShowUnderlay}
            onPress={this.goToNaturals}
          >
            <Text style={styles.text}>hydro Disaster</Text>
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
            <Text style={styles.text}>geo Disaster</Text>
          </TouchableOpacity >
        </ImageBackground>     


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
            <Text style={styles.text}>meteo Disaster</Text>
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
            <Text style={styles.text}>space Disaster</Text>
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
            <Text style={styles.text}>wildfire</Text>
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
    backgroundColor: "#c9efff",
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
  title: {
    fontSize: 30,
    fontWeight: '700'
  },
  backgroundImg: {
    height: 140,
    width: '80%',
    borderRadius: 5
  },
  navigationBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: 140,
    marginBottom: 20,
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
