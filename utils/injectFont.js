import React, { Component } from 'react';

export default (MyComponent) => {
  return class HOC extends Component {
    async componentWillMount() {
      await Font.loadAsync({
        'open-sans-bold': require('../assets/fonts/Raleway-Regular.ttf'),
      });
    }

    render() {
      return <MyComponent font={}/>
    }
  } 
}