import { connect } from 'react-redux'
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
  Button,
} from 'react-native';
import PropTypes from 'prop-types'
import { openMenu } from '../actions'
import { styles } from '../styles';

class NavBar extends Component {
  renderImageLink(src, url, text) {
    return (
      <TouchableHighlight onPress={() => Linking.openURL(url)}>
        <View style={{flexDirection: 'row'}}>
          <Image source={src} style={{width: 20, height: 20}}/><Text style={styles.hackprinceton}> {text ? text : ''}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    var {onOpen} = this.props 
    console.log("what: " + onOpen)
    return (
      <View style={styles.navbar}>
        <Button 
          style={{alignSelf: 'flex-start'}}
          title='Menu'
          onPress={onOpen}
        />
        <View style={{alignSelf: 'flex-end'}}>
          {this.renderImageLink(require('../assets/img/logo.png'), "https://hackprinceton.com", "HackPrinceton")}
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onOpen: () => dispatch(openMenu())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NavBar)