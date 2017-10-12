export default font = (state = false, action) => {
  if (action.type == 'FONTS_LOADED') return true
  else return state
}