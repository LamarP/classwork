const FollowToggle = require("./follow_toggle");

$(function () {
  let $buttons = $("button.follow-toggle");
  $buttons.each((index, button) => {
    new FollowToggle(button);
  })
},

  $(function () {
    let $userSearch = $("user-search.user-search-name");
    $userSearch.each((index, search) => {
        new UserSearch(search);
    })
})