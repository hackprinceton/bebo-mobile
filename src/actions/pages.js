export const pagesRequest = () => {
  return {
    type: 'LOAD_PAGES_REQ'
  }
}

export const pagesSuccess = pageUrls => {
  return {
    type: 'LOAD_PAGES_SUCC',
    pageUrls: pageUrls 
  }
}
export const fetchPages = () => dispatch => {
  dispatch(pagesRequest())
  let mock = [
    {
      name: 'Travel',
      slug: 'travel',
    },
    {
      name: 'Guide',
      slug: 'guide',
    },
    {
      name: 'Hosting',
      slug: 'host',
    }
  ]

  dispatch(pagesSuccess(mock))
}
