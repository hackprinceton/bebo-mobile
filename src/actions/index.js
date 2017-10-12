import { Font } from 'expo'

export const fontsLoaded = () => {
  return {
    type: 'FONTS_LOADED',
    loaded: true
  }
}

export const eventsRequest = () => {
  return {
    type: 'LOAD_EVENTS_REQ'
  }
}

export const eventsSuccess = events => {
  return {
    type: 'LOAD_EVENTS_SUCC',
    events: events
  }
}

export const loadFonts = () => async dispatch => {
  await Font.loadAsync({
    'Abel': require('../assets/fonts/Abel.ttf'),
    'FontAwesome': require('../assets/fonts/FontAwesome.ttf')
  });
  dispatch(fontsLoaded())
}

export const fetchEvents = () => dispatch => {
  dispatch(eventsRequest())
  let mock = [
    {
      title: 'Test Event',
      start: 10000,
      location: 'place',     
    },
    {
      title: 'Test Event 2',
      start: 20000,
      end: 30000,
      location: 'place2', 
    }
  ]
  
  dispatch(eventsSuccess(mock))
}