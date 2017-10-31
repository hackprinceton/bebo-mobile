import React from 'react'
import moment from 'moment-timezone'
import {
  Text,
  View
} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { styles } from '../styles'


export const Announcement = anoun => {
  return (
    <View style={styles.dayofEvent}>
      <Text style={styles.title}>{anoun.item.title}</Text>

      <Text style={styles.body}><FontAwesome>{Icons.newspaperO}</FontAwesome> {anoun.item.body}</Text>
    </View>
  );
}
