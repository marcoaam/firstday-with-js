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
			$('h2').text(game.announceWinner());
		})
})