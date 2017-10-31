export default pages = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PAGES_SUCC':
      return action.pageUrls
    default:
      return state
  }
}
