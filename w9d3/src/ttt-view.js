class View {
  constructor(game, $el) {}

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {}
}
View.prototype.setupBoard = function () {
  const ul = $("<ul>");

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
       
      ul.append($("<li>"));
    }
  }
  this.$el.append(ul);
}
module.exports = View;
