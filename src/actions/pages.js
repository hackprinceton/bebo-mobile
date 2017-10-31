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

export const pagesError = error => {
  return {
    type: 'LOAD_PAGES_ERR',
    error: error
  }
}

export const fetchPages = () => dispatch => {
  dispatch(pagesRequest())
  fetch('https://hackprinceton.com/api/pages.json')
  .then(response => {
    if (response.ok) {
      response.json().then(json =>  
        dispatch(pagesSuccess(json))
      )
    }
  })
  .catch(err => {
    dispatch(downloadFileError(err))
  })
}
