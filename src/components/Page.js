import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types'
import {styles} from '../styles';

const renderImageLink = (src, url, text) => {
  return (
    <TouchableHighlight onPress={() => Linking.openURL(url)}>
      <View style={{flexDirection: 'row'}}>
        <Image source={src} style={{width: 20, height: 20}}/><Text style={styles.hackprinceton}> {text ? text : ''}</Text>
      </View>
    </TouchableHighlight>
  );
}

const Page = (props) => {
  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'flex-start'}}>
        {renderImageLink(require('../assets/img/logo.png'), "https://hackprinceton.com", "HackPrinceton")}
      </View>
      <View style={styles.card}>
        {props.children}
      </View>
    </View>
  )
}

export default Page