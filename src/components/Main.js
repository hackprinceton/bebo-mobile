import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import EventPage from '../containers/EventPage';
import AnnouncementPage from '../containers/AnnouncementsPage'
import Page from './Page';
import Drawer from 'react-native-drawer'
import DrawerOptions from './DrawerOptions'
import { styles } from '../styles';
import { fontsloaded, loadFonts, closeMenu } from '../actions'
import PropTypes from 'prop-types'

const placeHolder = (text) => {
  return (
    <View><Text>{text}</Text></View>
  )
}

class Main extends Component {
  static propTypes = {
    fontLoaded: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(loadFonts())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menuIsOpen) {
      this.drawer.open()
    }
  }

  placeHolder (text) {
    return (
      <View><Text>{text}</Text></View>
    )
  }

  getPage(page) {
    switch (page) {
      case 'EVENT_PAGE': return <Page><EventPage /></Page>
      case 'ANNOUNCEMENT_PAGE': return <Page><AnnouncementPage /></Page>
      default: return <Page>{placeHolder("Not Found")}</Page>
    }
  }

  render() {
    var { onClose } = this.props
    return ( 
      this.props.fontLoaded ? 
      (<Drawer
        ref={ref => this.drawer = ref}
        type="displace"
        content={
          <DrawerOptions />
        }
        openDrawerOffset={(viewport) => viewport.width - 200}
        acceptTap
        styles={{flex: 1}}
        onOpen={() => {
          console.log('onopen')
        }}
        onClose={() => {
          console.log('onclose')
          onClose()
        }}
        captureGestures={false}
        tweenDuration={100}
        >
        {this.getPage(this.props.page)}
        </Drawer>) : null
    )
  }
}

const mapStateToProps = state => {
  return {
    fontLoaded: state.font,
    page: state.navbar.page,
    menuIsOpen: state.navbar.menuIsOpen
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClose: () => dispatch(closeMenu()),
    dispatch: dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
