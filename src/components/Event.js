import React from 'react'
import moment from 'moment-timezone'
import {
  Text,
  View
} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { styles } from '../styles'

const DATE_FORMAT = 'ddd h:mm a';
const TIME_ZONE = 'America/New_York';

const formatTime = time => {
  return moment(time).tz(TIME_ZONE).format(DATE_FORMAT);
}

export const Event = evt => {
  const timeStr = formatTime(evt.item.start) + '-' + formatTime(evt.item.end);
  const location = (evt.item.location) ?
    <Text style={styles.body}><FontAwesome>{Icons.mapMarker}</FontAwesome> {evt.item.location}</Text> :
    null
  return (
    <View style={styles.dayofEvent}>
      <Text style={styles.title}>{evt.item.title}</Text>
      {location}
      <Text style={styles.body}><FontAwesome>{Icons.clockO}</FontAwesome> {timeStr}</Text>
    </View>
  ); 
}