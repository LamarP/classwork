

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let $tower = $("<ul>");
      for (let j = 0; j < 3; j++) {
        let $disk = $("<li>");
        $tower.append($disk);
      }
      this.$el.append($tower);
    }
  }

  render() {
    
  }

}


module.exports = View;