export default events = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_EVENTS_SUCC':
      return action.events
    default:
      return state
  }
}