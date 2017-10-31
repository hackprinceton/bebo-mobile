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
    dispatch: PropTypes.func.isRequired,
    pageUrls: PropTypes.array.isRequired,
  }

  openPage(page) {
    const {dispatch} = this.props
    dispatch(openPage(page))
  }

  renderCustomPageLinks() {
    return this.props.pageUrls.map(url => {
      return (
        <TouchableOpacity key={url.slug} style={styles.drawerItem} onPress={() => this.openPage(url.slug)}>
          <Text style={styles.drawerItemText}>{url.name}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <ScrollView style={styles.drawerOptions}>
        <Text style={styles.drawerItemText}>Control Panel</Text>
        <TouchableOpacity style={styles.drawerItem} onPress={() => this.openPage('EVENT_PAGE')}>
          <Text style={styles.drawerItemText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={() => this.openPage('ANNOUNCEMENT_PAGE')}>
          <Text style={styles.drawerItemText}>Announcements</Text>
        </TouchableOpacity>
        { this.renderCustomPageLinks() }
      </ScrollView>
    )
  }
}

export default connect()(DrawerOptions)