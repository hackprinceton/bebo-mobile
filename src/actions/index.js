import { Font } from 'expo'

export const fontsLoaded = () => {
  return {
    type: 'FONTS_LOADED',
    loaded: true
  }
}




export const loadFonts = () => async dispatch => {
  await Font.loadAsync({
    'Abel': require('../assets/fonts/Abel.ttf'),
    'FontAwesome': require('../assets/fonts/FontAwesome.ttf')
  });
  dispatch(fontsLoaded())
}
