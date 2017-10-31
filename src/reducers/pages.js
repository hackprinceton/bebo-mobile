export default pages = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PAGES_SUCC':
      return action.pageUrls.filter(pageUrl => {
        return !pageUrl.url.includes('#') // exclude homepage links
      })
    case 'LOAD_PAGES_ERR':
      return []
    default:
      return state
  }
}
