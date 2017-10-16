export default announcements = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_ANNOUNC_SUCC':
      return action.announcements
    default:
      return state
  }
}
