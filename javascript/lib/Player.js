function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.defeats = function(opponent) {
  return Game.prototype.pairs[this.pick]['beats'].indexOf(opponent.pick) !== -1;
};

Player.prototype.randomSelection = function() {
  return Object.keys(Game.prototype.pairs)[Math.floor(Math.random() * 5)]
};