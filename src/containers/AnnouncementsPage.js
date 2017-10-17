import { connect } from 'react-redux'
import {
  View,
} from 'react-native'
import { fetchAnnouncements } from '../actions/announcements'
import { AnnouncementList } from '../components/AnnouncementList'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class AnnouncementPage extends Component {
  static propTypes = {
    announcements: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAnnouncements())
  }

  render() {
    const { announcements } = this.props
    return (
      <View>
        <AnnouncementList announcements={announcements} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    announcements: state.announcements
  }
}

export default connect(
  mapStateToProps,
)(AnnouncementPage)
