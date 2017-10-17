import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import NavBar from '../containers/NavBar'
import PropTypes from 'prop-types'
import {styles} from '../styles';


const Page = (props) => {
  return (
    <View>
      <NavBar />
      <View style={styles.container}>
        <View style={styles.card}>
          {props.children}
        </View>
      </View>
    </View>
  )
}

export default Page