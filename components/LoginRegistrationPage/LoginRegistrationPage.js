import React from 'react';
import SelectTypePage from '../SelectTypePage';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LoginRegistrationPage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up </Text>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('SelectType', { someData: 'data' })
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

// export default class Login extends React.Component {
//   state = {
//     data: null
//   }

//   // componentDidMount() {
//   //   fetch('http://192.168.88.178:8080/').then(response => response.json()).then(response => this.setState({ data: response.data }));
//   // }
//   render() {
//     return (
      
//       <SelectTypePage />
//     );
//   }
// }