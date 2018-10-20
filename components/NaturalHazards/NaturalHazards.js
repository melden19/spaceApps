import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import NaturalHazardStyle from '../NaturalHazardStyle';

export default class Natural extends React.Component {
  state = {
    data: null
  }

  
  render() {
    return (
      <NaturalHazardStyle />
      // <View style={styles.container}>
      //   <Text>Login</Text>
      //   {this.state.data && <Text>{this.state.data}</Text>}
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});