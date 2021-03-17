class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (event) => {
      event.preventDefault();
      const $square = $(event.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    const pos = $square.data("pos");
    this.game.playMove(pos);
    const currentPlayer = this.game.currentPlayer;

    $square.addClass(currentPlayer);

  }

  setupBoard() {
    const $ul = $("<ul>");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }

}

module.exports = View;
