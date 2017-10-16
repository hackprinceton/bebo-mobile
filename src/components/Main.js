import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import {PagerTabIndicator, IndicatorViewPager} from 'rn-viewpager';
import EventPage from '../containers/EventPage';
import AnnouncementPage from '../containers/AnnouncementsPage'
import Page from './Page';
import {styles} from '../styles';
import { fontsloaded, loadFonts } from '../actions'
import PropTypes from 'prop-types'

const renderTabIndicator = () => {
  let tabs = [
    { text: "E" }, // calendar
    { text: "A" }, // bullhorn
    { text: "I" }, // info
    { text: "H" }, // hosting
    { text: "M"}, // maps
  ];
  return (<PagerTabIndicator
    tabs={tabs}
  />);
}

const placeHolder = (text) => {
  return (
    <View><Text>{text}</Text></View>
  )
}

class Main extends Component {
  static propTypes = {
    fontLoaded: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.dispatch(loadFonts())
  }

  render() {
    return (
      this.props.fontLoaded ?
      (<IndicatorViewPager
        style={{flex: 1}}
        indicator={renderTabIndicator()}
        initialPage={0}
        scrollEnabled={true}>
        <Page><EventPage /></Page>
        <Page><AnnouncementPage /></Page>
        <Page>{placeHolder("Info")}</Page>
        <Page>{placeHolder("Hosting")}</Page>
        <Page>{placeHolder("Maps")}</Page>
      </IndicatorViewPager>) : null
    )
  }
}

const mapStateToProps = state => {
  return {
    fontLoaded: state.font
  }
}

export default connect(mapStateToProps)(Main)
