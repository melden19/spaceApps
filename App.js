import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import { Font } from 'expo';
import thunk from 'redux-thunk';

import {
  LoginRegistrationPage,
  NaturalHazards,
  SelectTypePage,
  TestLoginPage,
  TestRegPage,
  ListFromServer,
  CheckboxList,
  GeoDisPage,
  EarthInfoPage,
  VInfoPage
} from './components';
import general from './actions/general';
import rootReducer from './reducers';

const RouterPages = createStackNavigator({  
  LogReg: {screen: LoginRegistrationPage},
  Login: { screen: TestLoginPage },
  Reg: {screen: TestRegPage}, 
  SelectType: {screen: SelectTypePage},
  Natural : { screen: NaturalHazards },
  ListFromServer: { screen: ListFromServer },
  CheckboxList: { screen: CheckboxList },
  GeoD: {screen: GeoDisPage},
  EInf: {screen: EarthInfoPage},
  VInf: {screen: VInfoPage}
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

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WrappedRouter />
      </Provider>
    )
  }
}