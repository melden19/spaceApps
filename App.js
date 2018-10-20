import React from 'react';
import { createStore } from 'redux';
import { createStackNavigator } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import { Font } from 'expo'

import {
  LoginRegistrationPage,
  NaturalHazards,
  SelectTypePage
} from './components';
import general from './actions/general';
import rootReducer from './reducers';

const RouterPages = createStackNavigator({
  Login: { screen: LoginRegistrationPage },
  SelectType: {screen: SelectTypePage},
  Natural : { screen: NaturalHazards },
});
class Router extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'regularFont': require('./assets/fonts/Raleway-Regular.ttf'),
      'boldFont': require('./assets/fonts/Raleway-ExtraBold.ttf'),
    });
    this.props.changeFontLoadStatus();
  }
  render() {
    return <RouterPages /> 
  }
}

const mapStateToProps = (state) => ({
  fontDownloaded: state.general.fontDownloaded
})
const mapDispatchToProps = (dispatch) => ({
  changeFontLoadStatus: () => dispatch(general.changeFontStatus()) 
})

const WrappedRouter = connect(mapStateToProps, mapDispatchToProps)(Router);

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WrappedRouter />
      </Provider>
    )
  }
}