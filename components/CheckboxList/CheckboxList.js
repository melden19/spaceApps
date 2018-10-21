import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, AsyncStorage } from 'react-native'
import { CheckBox, Button } from 'react-native-elements'
import Modal from 'react-native-modalbox';

export default class CheckboxList extends Component {
  state = {
    checkBoxesValues: [],
    modalIsOpen: false,
    textInputValue: '',
    checkBoxes: [
      'qwe',
      'asd',
      'zxc'
    ]
  }

  componentDidMount() {
    AsyncStorage.getItem('arrOfCheckedBoxed').then(arr => {
      console.log(arr);
      if (arr) {
        this.setState({
          checkBoxesValues: arr
        }); 
      }
    })
  }

  toggleModal = (value) => {
    this.setState((prevState) => ({
      modalIsOpen: value
    }));
  }

  onValueChange = (name) => {
    const { checkBoxesValues } = this.state;
    const index = checkBoxesValues.indexOf(name);
    if (index > -1) {
      const newArr = [...checkBoxesValues];
      newArr.splice(index, 1);
      this.setState({
        checkBoxesValues: newArr
      }, () => AsyncStorage.setItem('arrOfCheckedBoxed', this.state.checkBoxesValues));
    } else {
      const newArr = [...checkBoxesValues];
      newArr.push(name);
      this.setState({
        checkBoxesValues: newArr
      });
    }

  };

  renderCheckBox = (name) => {
    return <CheckBox
      key={`${name}Checkbox`}
      checked={this.state.checkBoxesValues.includes(name)}
      onPress={() => this.onValueChange(name)}
      title={name}
    />
  }

  handleInputChange = (text) => {
    this.setState({
      textInputValue: text
    })
  }

  addItem = () => {
    const newArr = [ ...this.state.checkBoxes ];
    newArr.push(this.state.textInputValue);
    this.setState({
      checkBoxes: newArr,
      modalIsOpen: false
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        {this.state.checkBoxes.map((name, index) => this.renderCheckBox(name, index))}
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Button onPress={() => this.toggleModal(true)} title="Add" style={{ width: 200 }} />
        </View>
        <Modal
          style={{ width: '80%', height: 170, borderRadius: 30 }}
          isOpen={this.state.modalIsOpen}
          onClosed={() => this.toggleModal(false)}
        >
          <View style={{ width: '100%', height: '100%', alignItems: "center" }}>
            <View style={{ width: 250, marginTop: 30 }}>
              <TextInput
                value={this.state.textInputValue}
                onChangeText={this.handleInputChange}
                style={{ borderBottomWidth: 1, paddingBottom: 10  }}
              />
              <Button 
                title="Add item"
                onPress={this.addItem}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    )
  }
}