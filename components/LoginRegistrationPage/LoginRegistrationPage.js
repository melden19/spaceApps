import React from 'react';
import SelectTypePage from '../SelectTypePage';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontText } from '../../components';

export default class LoginRegistrationPage extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FontText isBold>Open up </FontText>
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