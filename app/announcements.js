/**
 * UI to display announcements pulled from meteor
 *
 * @author Roland Fong (rfong@princeton.edu)
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import {styles} from './styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Meteor, { createContainer } from 'react-native-meteor';

class Announcements extends Component {

  static renderAnnouncement(announcement) {
    return (
      <View style={styles.announcement}>
        <Text style={styles.title}>{announcement.item.title}</Text>
        <Text style={styles.body}>{announcement.item.body}</Text>
      </View>
    );
  }

  static renderListSeparator() {
    return (
      <View style={styles.separator}/>
    );
  }

  render() {
    const {announcements} = this.props;
    return (
      <View>
        <Text style={styles.cardTitle}><FontAwesome>{Icons.bullhorn}</FontAwesome> Announcements</Text>
        <FlatList
          data={announcements}
          renderItem={Announcements.renderAnnouncement}
          keyExtractor={(item, index) => index} // prevent map key missing value warningX
          ItemSeparatorComponent={Announcements.renderListSeparator}
        />
      </View>
    );
  }
}

export default AnnouncementContainer = createContainer(() => {
  Meteor.subscribe('announcements');
  return {
    announcements: Meteor.collection('announcements').find()
  };
}, Announcements)
