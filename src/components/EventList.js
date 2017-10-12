import React from 'react'
import {
  Text,
  View,
  FlatList  
} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { Event } from './Event'
import { styles } from '../styles'

const renderListSeparator = () => {
  return (
    <View style={styles.separator}/>
  );
}

export const EventList = (events) => {
  return (
    <View>
      <Text style={styles.cardTitle}><FontAwesome>{Icons.calendar}</FontAwesome> Schedule</Text>
      <FlatList
        data={events['events']}
        renderItem={Event}
        keyExtractor={(item, index) => index} // prevent map key missing value warningX
        ItemSeparatorComponent={renderListSeparator}
      />
    </View>
  )
}