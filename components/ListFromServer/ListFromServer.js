import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import general from '../../actions/general';

class ListFromServer extends Component {
  componentDidMount() {
    this.props.fetchData('https://reqres.in/api/users?page=1', 'antropogenic');
  }

  render() {
    return (
      <View>
        <Text>
          ewq
        </Text>
        {this.props.data && <Text>sometext</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({})

const mapStateForProps = (state) => ({
  data: state.general.dataLibrary['antropogenic']
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (url, partName) => dispatch(general.uploadInfo(url, partName))
})

export default connect(mapStateForProps, mapDispatchToProps)(ListFromServer);