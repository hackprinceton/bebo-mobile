/**
 * UI to display a list of events pulled from meteor
 *
 * @author Roland Fong (rfong@princeton.edu)
 */
import React, { Component } from 'react';
import moment from 'moment-timezone';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import {styles} from './styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Meteor, { createContainer } from 'react-native-meteor';

const DATE_FORMAT = 'ddd h:mm a';
const TIME_ZONE = 'America/New_York';

class Schedule extends Component {

  static formatTime(time) {
    return moment(time).tz(TIME_ZONE).format(DATE_FORMAT);
  }

  static renderEvent(evt) {
    const timeStr = Schedule.formatTime(evt.item.start) + '-' + Schedule.formatTime(evt.item.end);
    const location = (evt.item.location) ?
      <Text style={styles.body}><FontAwesome>{Icons.mapMarker}</FontAwesome> {evt.item.location}</Text> :
      null;
    return (
      <View style={styles.dayofEvent}>
        <Text style={styles.title}>{evt.item.title}</Text>
        {location}
        <Text style={styles.body}><FontAwesome>{Icons.clockO}</FontAwesome> {timeStr}</Text>
      </View>
    );
  }

  static renderListSeparator() {
    return (
      <View style={styles.separator}/>
    );
  }

  render() {
    const { events } = this.props;
    return (
      <View>
        <Text style={styles.cardTitle}><FontAwesome>{Icons.calendar}</FontAwesome> Schedule</Text>
        <FlatList
          data={events}
          renderItem={Schedule.renderEvent}
          keyExtractor={(item, index) => index} // prevent map key missing value warningX
          ItemSeparatorComponent={Schedule.renderListSeparator}
        />
      </View>
    );
  }
}

export default ScheduleContainer = createContainer(() => {
  Meteor.subscribe('events');
  return {
    events: Meteor.collection('events').find()
  };
}, Schedule)
