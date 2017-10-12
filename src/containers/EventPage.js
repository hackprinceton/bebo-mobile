import { connect } from 'react-redux'
import {
  View,
} from 'react-native'
import { fetchEvents } from '../actions'
import { EventList } from '../components/EventList'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class EventPage extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchEvents())
  }

  render() {
    const { events } = this.props
    return (
      <View>
        <EventList events={events} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events 
  }
}

export default connect(
  mapStateToProps,
)(EventPage)
