import React from 'react'
import moment from 'moment-timezone'
import {
  Text,
  View
} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { styles } from '../styles'

// const DATE_FORMAT = 'ddd h:mm a';
// const TIME_ZONE = 'America/New_York';
//
// const formatTime = time => {
//   return moment(time).tz(TIME_ZONE).format(DATE_FORMAT);
// }

export const Announcement = anoun => {
  console.log("rendering announcement " + JSON.stringify(anoun))
  //const timeStr = formatTime(anoun.item.start) + '-' + formatTime(anoun.item.end);

  // const location = (anoun.item.location) ?
  //   <Text style={styles.body}><FontAwesome>{Icons.mapMarker}</FontAwesome> {anoun.item.location}</Text> :
  //   null
  return (
    <View style={styles.dayofEvent}>
      <Text style={styles.title}>{anoun.item.title}</Text>

      <Text style={styles.body}><FontAwesome>{Icons.newspaperO}</FontAwesome> {anoun.item.body}</Text>
    </View>
  );
}
