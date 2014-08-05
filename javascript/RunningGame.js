$(document).ready(function() {
		var player1;
		var player2;
		var game;


		player1 = new Player("Marco");
		player2 = new Player("Computer");
		game = new Game(player1, player2);

		$('.choices img').on('click', function(){
			player1.picks($(this).data("pick"));
			player2.picks(player2.randomSelection());

			if (game.winner() === player1) {
				$('<li id="winner">' + game.announceWinner() + '</li>').prependTo('#results').slideDown();
				$('#winner').css("backgroundColor", "green");
			}

			else if (game.winner() === player2) {
				$('<li id="loser">' + game.announceWinner() + '</li>').prependTo('#results').slideDown();
				$('#loser').css("backgroundColor", "red");
			}

			else {
				$('<li>' + game.announceWinner() + '</li>').prependTo('#results').slideDown();
			}

			$('#player1').text(player1.name + ' have won ' + player1.winnings + ' times');
			$('#player2').text(player2.name + ' have won ' + player2.winnings + ' times');

			$('#results li:gt(3)').fadeOut(function() {
				$(this).remove();
			})
		})
})