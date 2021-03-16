// Function.prototype.inherits = function (Parent) {
//   function Surrogate() { }
//   Surrogate.prototype = Parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// }
Function.prototype.inherits = function (Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
}

function MovingObject() {
  // this.name = name;
}
MovingObject.prototype.thatThingy = function() {
 console.log("Zoom or something!");
}

function Ship(name) {
  //MovingObject.call(this, name);
  this.name = name;
}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

const s1 = new Ship('challenger');
console.log(s1);
s1.thatThingy();

const a1 = new Asteroid;

a1.thatThingy();

