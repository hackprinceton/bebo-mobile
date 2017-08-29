/**
 * General Page layout
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
} from 'react-native';
import {styles} from './styles';;

class Page extends Component {

  renderImageLink(src, url, text) {
    return (
      <TouchableHighlight onPress={() => Linking.openURL(url)}>
        <View style={{flexDirection: 'row'}}>
          <Image source={src} style={{width: 20, height: 20}}/><Text style={styles.hackprinceton}> {text ? text : ''}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignSelf: 'flex-start'}}>
        {this.renderImageLink(require('./assets/img/logo.png'), "https://hackprinceton.com", "HackPrinceton")}
        </View>
        <View style={styles.card}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default Page