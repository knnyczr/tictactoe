let $space = $('.space');
let $body = $('body');
console.log($space);
let x = true;

$space.on('click', letsAlternate); 
//$space.on('click', winner); 


// every click should alternate what kind of div is made (alternate between players)
// visual presentation for who's move it is.
// on click event change a div for x's 
// on click event change a div for o's
let player1 = [];
let player2 = []; 
function letsAlternate(){
		if (x){
			$(this).addClass('exes');
			$(this).html('<h2>X</h2>');
			$(this).off('click');
			player1.push($(this)); 
			$body.removeClass('os');
			$body.addClass('exes');
			return x = false;
		}
		else {
			$(this).addClass('os');
			$(this).html('<h2>O</h2>');
			$(this).off('click');
			player2.push($(this));
			$body.removeClass('exes');
			$body.addClass('os');
			return x = true; 
		}
}


function winner(){
//	let exes = $('div').css();
//	debugger;
	if (
		($space[0].className == $space[1].className)&&($space[1].className == $space[2].className) ||
		($space[3].className == $space[4].className)&&($space[4].className == $space[5].className) ||
		($space[6].className == $space[7].className)&&($space[7].className == $space[8].className) ||
		($space[0].className == $space[3].className)&&($space[3].className == $space[6].className) ||
		($space[1].className == $space[4].className)&&($space[4].className == $space[7].className) ||
		($space[2].className == $space[5].className)&&($space[5].className == $space[8].className) ||
		($space[0].className == $space[4].className)&&($space[4].className == $space[8].className) ||
		($space[2].className == $space[4].className)&&($space[4].className == $space[6].className)
	)
		{
		console.log('winner');
		}
	else{
		console.log('no winner yet');
	}
}
//cell cannot be clicked twice. .text? .html? 
//reset button to clear the board.

//determine the winning combinations
//check those combinations on the board after every move. setInterval


