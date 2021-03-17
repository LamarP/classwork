const View = require("./ttt-view");
const Game = require("./tic-tac-sol/game.js");

  $(() => {
    const game = new Game();
    const ttt_jquery = $(".ttt");
    const view = new View(game, ttt_jquery);
  });
