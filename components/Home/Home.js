import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    // console.log(this.props.navigation);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up </Text>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Login', { someData: 'data' })
          }
        />
      </View> 
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
