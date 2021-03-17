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
    // this.game.playMove(pos);
    const currentPlayer = this.game.currentPlayer;
    try {
      this.game.playMove(pos);
      $square.addClass(currentPlayer);
    } catch (e) {
      alert('move was invalid!!!!')
    }
    let winner = this.game.winner();
    if (winner) {
      this.$el.addClass('winner-' + winner);
      this.$el.off();
      alert(`${winner} has won!!!!`)
    }

    
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
