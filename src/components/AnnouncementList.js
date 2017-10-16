import React from 'react'
import {
  Text,
  View,
  FlatList
} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { Announcement } from './Announcement'
import { styles } from '../styles'

const renderListSeparator = () => {
  return (
    <View style={styles.separator}/>
  );
}

export const AnnouncementList = (announcements) => {
  return (
    <View>
      <Text style={styles.cardTitle}><FontAwesome>{Icons.bullhorn}</FontAwesome>Announcements</Text>
      <FlatList
        data={announcements['announcements']}
        renderItem={Announcement}
        keyExtractor={(item, index) => index} // prevent map key missing value warningX
        ItemSeparatorComponent={renderListSeparator}
      />
    </View>
  )
}
