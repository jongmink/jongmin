function Deck() {
	// creating cards with id(number)
	var card;
	var suits = ['&spades;','&hearts;','&diams;','&clubs;'];
	var ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
	var counter = 0
		for (var suit = 0; suit < suits.length; suit++) {
			for (var rank =0; rank < ranks.length; rank++) {
				var cardContent = suits[suit]  + "<br /> <br /> <br />" + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + ranks[rank] + "</li>"
				if (suits[suit] == '&spades;') {
					card = "<li id=" + counter + "> &nbsp;" + cardContent;
				} else if (suits[suit] == '&hearts;') {
					card = "<li id=" + counter + " class= 'red'> &nbsp;" + cardContent; 
				} else if (suits[suit] == '&diams;') {
					card = "<li id=" + counter + " class= 'red'> &nbsp;" + cardContent;
				} else {
					card = "<li id=" + counter + "> &nbsp;" + cardContent;
				}
				counter++
				$("#cardList").append(card);
			}
		}
	};

var deck = new Deck();
// shuffle 
var shuffle = function(m) {

	if (m >= 0) {setTimeout(function() {
		$('li').removeClass('highlight');
		var rand = Math.floor(Math.random() * 51); 
		var $lastCard = $('li').eq(m);
		var $randomCard = $('li').eq(rand);
		$randomCard = $('li').eq(m);
		$lastCard = $('li').eq(rand);

		$('li').eq(m).before($lastCard);
		$('li').eq(rand).before($randomCard);

		$('li').eq(m).addClass('highlight');
		$('li').eq(rand).addClass('highlight');
		shuffle(m-1);
	}, 50)
	} else { $('li').removeClass('highlight');
		}
};
// sort
var sort = function() {
	has_moved = true
	setInterval(function() { 
		has_moved = false
		for (i = 0; i < $('li').length; i++) {
		var first_item = $('li').eq(i)
			if (parseInt(first_item.attr('id')) > parseInt($('li').eq(i+1).attr('id'))) {
				$('li').eq(i+1).after(first_item);
				has_moved = true
			}
		}	
	}, 500) 
	if (has_moved = false) {
		clearInterval(sort);
	}	
}
// shuffle button
$("#shuffle").on('click', function() {
	shuffle(51);

});
// sort button
$("#sort").on('click', function() {
	sort();
})
