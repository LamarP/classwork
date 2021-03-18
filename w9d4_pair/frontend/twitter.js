const FollowToggle = require("./follow_toggle");

$(function() {
    let $buttons = $("button.follow-toggle");
    $buttons.each((index, button) => function() {
        new FollowToggle(button);
    })
})