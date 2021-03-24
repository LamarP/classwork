import React from "react";


class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tile = this.props.tile;
    let text = "";

    if (tile.explored){
      if (tile.bombed){
        text = "BOOM!";
      } else {
        let num = tile.adjacentBombCount();
        if (num > 0){
          text = `${num}`;
        } else {
          text = "";
        };
      }
    } else if (tile.flagged){
      text = "Flagged!";
    }
    return (
      <div>
        <a>{text}</a>
      </div>
    )
  }
}
export default Tile;