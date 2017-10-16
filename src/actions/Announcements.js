export const announcementsRequest = () => {
  return {
    type: 'LOAD_ANNOUNC_REQ'
  }
}

export const announcementsSuccess = announcements => {
  return {
    type: 'LOAD_ANNOUNC_SUCC',
    announcements: announcements
  }
}
export const fetchAnnouncements = () => dispatch => {
  dispatch(announcementsRequest())
  let mock = [
    {
      title: 'Test Announcement 1',
      body: 'Body of Test Announcement 1',
    },
    {
      title: 'Test announcement 2',
      body: 'body of test Announcement 2',
    }
  ]

  dispatch(announcementsSuccess(mock))
}
