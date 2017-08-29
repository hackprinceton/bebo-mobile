/**
 * UI to display info page
 *
 * @author Roland Fong (rfong@princeton.edu)
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  Linking,
} from 'react-native';
import {styles} from './styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Meteor, { createContainer } from 'react-native-meteor';

class Info extends Component {

  renderLink(text, url) {
    return (
      <TouchableHighlight onPress={() => Linking.openURL(url)}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.hackprinceton}> {text ? text : ''}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  static renderListSeparator() {
    return (
      <View style={styles.separator}/>
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.cardTitle}><FontAwesome>{Icons.info}</FontAwesome> Information</Text>
        <View>
          <Text style={styles.body}>Wi-Fi: puvisitor (no password)</Text>
          <Text style={styles.body}>Campus Police: 609-258-1000</Text>
          <Text style={styles.body}>Campus Police: 609-258-1000</Text>
        </View>
        {Info.renderListSeparator()}
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            {this.renderLink(<FontAwesome>{Icons.facebook}</FontAwesome>, "https://www.facebook.com/hackprinceton")}
            {this.renderLink(<FontAwesome>{Icons.twitter}</FontAwesome>, "https://twitter.com/hackprinceton")}
            {this.renderLink(<FontAwesome>{Icons.instagram}</FontAwesome>, "https://www.instagram.com/hackprinceton/")}
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>&copy; 2017 </Text>{this.renderLink("Princeton Entrepreneurship Club", "http://www.princetoneclub.com/")}
          </View>
          <View>
            {this.renderLink("Code of Conduct", "http://static.mlh.io/docs/mlh-code-of-conduct.pdf")}
          </View>
        </View>
      </View>
    );
  }
}

export default InfoContainer = createContainer(() => {
  return {
  };
}, Info)

