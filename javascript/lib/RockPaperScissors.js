function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function() {
	if ( this._isSamePick()) return null;

	if (this.player1.defeats(this.player2)) {
		this.loser = this.player2;
  	return this.player1;
  }
  else {
  	this.loser = this.player1;
  	return this.player2;
  }
};

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};

Player.prototype.defeats = function(opponent) {
	return Game.prototype.pairs[this.pick]['beats'].indexOf(opponent.pick) !== -1;
};

Game.prototype.pairs = {
								 rock:     { beats: ['scissors', 'lizard'] },
    						 paper:    { beats: ['rock', 'spock'     ] },
    						 scissors: { beats: ['paper', 'lizard'   ] },
    						 lizard: 	 { beats: ['paper', 'spock'    ] },
    						 spock: 	 { beats: ['scissors', 'rock'  ] }
};

Game.prototype.announceWinner = function() {
	if (this.winner() === null) return 'It was a DRAW!!!';
	return (this.winner().name + ' wins with ' + this.winner().pick);
};

Game.prototype.pickAction = {
	
}