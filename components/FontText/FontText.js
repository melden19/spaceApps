import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native' 

class FontText extends Component {

  getFont = () => ({ fontFamily: this.props.isBold ? 'boldFont' : 'regularFont' })

  renderText = () => this.props.isLoaded
  ? <Text style={[this.props.style, this.getFont()]}>{this.props.children}</Text>
  : <View style={{ width: 50, height: 20, backgroundColor: '#fff', borderRadius: 10 }}></View>;

  render() {
    return (
      this.renderText()
    )
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.general.fontDownloaded
});

export default connect(mapStateToProps)(FontText);