/**
 * @author Roland Fong (rfong@princeton.edu)
 */
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager} from 'rn-viewpager';
import ScheduleContainer from './schedule';
import AnnouncementContainer from './announcements';
import InfoContainer from './info';
import Page from './page';
import {styles} from './styles';
import Meteor from 'react-native-meteor';

// for locally run server on android- "ws://[your primary ip]:3000/websocket"
const ANDROID_SERVER_URL = 'ws://10.211.229.73:3000/websocket';
const IOS_SERVER_URL = 'ws://localhost:3000/websocket';
const PROD_URL = 'ws://hp-dayof.herokuapp.com/websocket';

class App extends Component {

  componentWillMount() {
    Meteor.connect(PROD_URL);
  }

  static renderTabIndicator() {
    // return <PagerDotIndicator pageCount={3} />;
    let tabs = [
      { text: "E" }, // calendar
      { text: "A" }, // bullhorn
      { text: "I" }, // info
      { text: "H" }, // hosting
    ];
    return (<PagerTabIndicator
      tabs={tabs}
    />);
  }

  render() {
    return (
      <IndicatorViewPager
        style={{flex: 1}}
        indicator={App.renderTabIndicator()}
        initialPage={0}
        scrollEnabled={true} >
        <Page><AnnouncementContainer /></Page>
        <Page><ScheduleContainer /></Page>
        <Page><InfoContainer/></Page>
        <Page><Text>Hosting Page Coming Soon!</Text></Page>
      </IndicatorViewPager>
    );
  }
}

export default App;
