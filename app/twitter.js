/**
 * UI to display twitter feed
 *
 * WIP
 *
 * @author Roland Fong (rfong@princeton.edu)
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import {styles} from './styles';
import twitter, {auth} from 'react-native-twitter';

const TWITTER_KEY = "DqvTcEpI8VMM7X6qA7Kx0y0Yo";
const TWITTER_SECRET = "E82m9SNAQUdChGG0n12BWO4Pt9SMQ1k1ylFKArffLd4Mk1pkIv";

class TwitterPage extends Component {

  static getFeed() {
    const {rest, stream} = twitter({
      consumerKey: TWITTER_KEY,
      consumerSecret: TWITTER_SECRET,

    })
  }

  render() {

  }
}
