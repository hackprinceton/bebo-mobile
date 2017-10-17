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
