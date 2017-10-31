export default navbar = (state = {
    menuIsOpen: false,
    page: 'EVENT_PAGE'
  }, action) => {
	switch (action.type) {
    case 'OPEN_MENU':
      return {
        ... state,
        menuIsOpen: true 
      }
    case 'SELECT_PAGE':
      return {
        ... state,
        menuIsOpen: false,
        page: action.page
      }
    case 'CLOSE_MENU':
      return {
        ... state,
        menuIsOpen: false 
      }
    default:
      return state
  }
}