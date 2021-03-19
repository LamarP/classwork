const ApiUtil = {
  unfollow: (id) => {
     
    return $.ajax({
      url: `/users/${id}/follow`,
      dataType: "json",
      method: "DELETE"
    })
  },
  
  follow: (id) => {
     
    return $.ajax({
      url: `/users/${id}/follow`,
      dataType: "json",
      method: "POST"
    })
  }
},

  searchUsers: (query) => {
  return $.ajax({
    url: '/users${id}/search',
    dataType: 'json',
    method: 'GET',
    data: { query}
  })
}



module.exports = ApiUtil;