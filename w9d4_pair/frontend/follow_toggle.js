const ApiUtil = require("./api_util.js");

class FollowToggle {
  constructor(el) {
      debugger
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
      this.$el.on("click", this.handelClick.bind(this));
    }
  
  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Followed");
      
    } else {
      this.$el.text("Unfollow");
    }
  }
  
  handelClick(e) {
    let that = this;
    e.preventDefault();
    if (this.followState === 'followed') {
      ApiUtil.unfollow(this.userId).then(() => {
        that.followState = 'unfollowed'
        that.render();
      });
    } else {
      ApiUtil.follow(this.userId).then(() => {
        that.followState = 'followed'
        that.render();
      });
    }
  }
  
}

module.exports = FollowToggle;