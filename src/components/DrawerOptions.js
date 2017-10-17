import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {openPage} from '../actions'
import PropTypes from 'prop-types'
import {styles} from '../styles'
import { connect } from 'react-redux'

class DrawerOptions extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  openPage(page) {
    console.log("changing to " + page)
    const {dispatch} = this.props
    dispatch(openPage(page))
  }

  render() {
    console.log("drawer opts")
    return (
      <ScrollView style={styles.drawerOptions}>
        <Text style={styles.drawerItemText}>Control Panel</Text>
        <TouchableOpacity style={styles.drawerItem} onPress={() => this.openPage('EVENT_PAGE')}>
          <Text style={styles.drawerItemText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => this.openPage('ANNOUNCEMENT_PAGE')}>
          <Text style={styles.drawerItemText}>Announcements</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default connect()(DrawerOptions)