var quoteArray = [];

var quoteMemory = [];

var QuoteInput = function (quote, album, song){

	this.quote = quote
	this.album = album
	this.song = song

	




};


QuoteInput.prototype.create = function(){
		this.el = $('<div class="quoteBox"><div class="quoteArea"><i>Quote: </i><div class="quote"> '+ this.quote + '</div></br><i>Album: </i><div class="album">'+ this.album + ' </div><i>Song: </i><div class="song"> '+ this.song + '</div></br><input class="remove" type="submit" value="Remove Quote"></div></div>');

	return this.el
}

$('#create').click(function(){
	$('#quoteForm').show()
	$('#create').hide()
	
});

$('#finished').click(function(e){
	e.preventDefault()
	$('#quoteForm').hide()
	$('#create').show()
	$('.quoteArea').show()
	
});






$(document).on('click', '#submit', function(e){
	var quote = $('#quoteInput').val()
	$('#quoteInput').val('')
	var album = $('#albumInput').val()
	$('#albumInput').val('')
	var song = $('#songInput').val()
	$('#songInput').val('')
	quoteArray.push(new QuoteInput(quote, album, song));
	e.preventDefault()
	$('#display').empty()
	for(var i=0; i<quoteArray.length; i++){
		$('#display').append(quoteArray[i].create())

	}
	var memLength= $('.quoteArea')
	quoteMemory = [];
	for (var i = 0; i < memLength.length; i++) {
		quoteMemory.push(memLength[i]);
		};


});

$(document).on('click', '.remove', function(){
  $(this).closest('.quoteArea').remove();
  var memLength= $('.quoteArea')
  quoteArray = []
  quoteMemory = []
	for (var i = 0; i < memLength.length; i++) {
		quoteMemory.push(memLength[i]);
		};
	});

// $(document).on('click', '.album', function(){

// 	var albumSort = $(this).text()
// 	var albumMatch = [];
// 	// console.log(instanceof quoteArray[0])
// 	for (var i = 0; i < quoteArray.length; i++) {
// 		if (quoteArray[i].album === albumSort){
// 			albumMatch.push(quoteArray[i]) 

// 		}

// 	}
// 	// $('#display').empty()
// 	// console.log(instanceof albumMatch[0])
// 	for(var i=0; i<albumMatch.length; i++){
// 		$('#display').append(albumMatch[i].create())

// 	}

// })












$(document).on('ready', function() {


});

