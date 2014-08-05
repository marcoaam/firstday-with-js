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

Game.prototype.pairs = {
								 rock:     { beats: ['scissors', 'lizard'], action: ['smashes', 'smashes'  ]  },
    						 paper:    { beats: ['rock', 'spock'     ], action: ['wharps', 'disproves' ]  },
    						 scissors: { beats: ['paper', 'lizard'   ], action: ['cuts', 'decapitates' ]  },
    						 lizard: 	 { beats: ['paper', 'spock'    ], action: ['eats', 'disproves'   ]  },
    						 spock: 	 { beats: ['scissors', 'rock'  ], action: ['smashes', 'vaporises']  }
};

Game.prototype.announceWinner = function() {
	if (this.winner() === null) return 'It was a DRAW!!!';
	return (this.winner().name + this.pickAction(this.winner(), this.loser) + this.loser.name + ' with ' + this.winner().pick);
};

Game.prototype.pickAction = function(winner, loser) {
	var action;
	action = Game.prototype.pairs[winner.pick]['beats'].indexOf(loser.pick);
	return (' ' + Game.prototype.pairs[winner.pick]['action'][action] + ' ');
};