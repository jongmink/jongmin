$(function() {
	var answer, chance, guess;
	answer = Math.floor(Math.random() * 10) + 1; 
	chance = 3;

$('#chance').html('<p>Chances left: ' + chance + '</p>');
$('#results').hide();
$('#new').hide();
var $numbers = $('#game_board div');
$numbers.on('mouseover', function() {
	$(this).addClass('highlighted');
});
$numbers.on('mouseleave', function() {
	$(this).removeClass('highlighted');
})

$numbers.on('click', function(evt) {
	evt.preventDefault();
	$('#results').show();
	$('#new').show();
	$('#new').on('mouseover', function() {
		$(this).addClass('highlighted');
	});
	$('#new').on('mouseleave', function() {
		$(this).removeClass('highlighted');
	});
	$numbers.on('mouseover',function() {
		$(this).removeClass('highlighted');
	});
		guess = evt.target.textContent;
	if (guess != answer) {
		$('#new').text('Try Again');
		if(guess > answer) {
			$('#results').html("<p>It's smaller than " + guess + ".</p>");
		} else { 
			$('#results').html("<p>It's bigger than " + guess + ".</p>");
		}
		chance--;
		$('#chance').html('<p>Chances left: ' + chance + '</p>');
		if (chance == 0) {
			$('#new').text('New Game');
			$('#results').html('<p>You Lose...</p>');
			chance = 3;
			$('#chance').html('<p>Chances left: ' + chance + '</p>');

		}
	} else {
		$('#new').text('New Game');
		$('#results').html('<p>Congratulations!</p>');
		answer = Math.floor(Math.random() * 10) + 1; 
		chance = 3;
		$('#chance').html('<p>Chances left: ' + chance + '</p>');
	};
});


$('#new').on('click', function() {
	$('#results').hide();
	$('#new').hide();
	$numbers.on('mouseover', function() {
	$(this).addClass('highlighted');
	});
	$numbers.on('mouseleave', function() {
	$(this).removeClass('highlighted');
	});
}) 
});
