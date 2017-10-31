import React, { Component } from 'react';
import {
  Text,
  View,
  WebView,
} from 'react-native';
import { connect } from 'react-redux'
import EventPage from '../containers/EventPage';
import AnnouncementPage from '../containers/AnnouncementsPage'
import Page from './Page';
import Drawer from 'react-native-drawer'
import DrawerOptions from './DrawerOptions'
import { styles } from '../styles';
import { fontsloaded, loadFonts, closeMenu } from '../actions'
import { fetchPages } from '../actions/pages'
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
    this.props.dispatch(fetchPages())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menuIsOpen) {
      this.drawer.open()
    } else if (this.drawer) {
      this.drawer.close()
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
      default: return (
        <Page>
          <View style={{flex:1, alignItems: 'flex-end'}}>
            <WebView 
              source={{uri: `https://hackprinceton.com${page}?embedded=1`}} 
              style={styles.webview}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}
              scalesPageToFit={true}
            />
          </View>
        </Page>
      ) // Note webview requires a width to render things?
    }
  }

  render() {
    var { onClose, pageUrls } = this.props
    return ( 
      this.props.fontLoaded ? 
      (<Drawer
        ref={ref => this.drawer = ref}
        type="displace"
        content={
          <DrawerOptions pageUrls={pageUrls}/>
        }
        openDrawerOffset={(viewport) => viewport.width - 200}
        acceptTap
        tapToClose
        styles={{flex: 1}}
        onOpen={() => {
        }}
        onClose={() => {
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
    menuIsOpen: state.navbar.menuIsOpen,
    pageUrls: state.pages,
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
