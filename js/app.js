$(document).ready(function(){
	$('#tweet-controls').toggle();
	$('.tweet-compose').click(function(){
		$('#tweet-controls').show();
		$('.tweet-compose').height('200%');
	});
	$('.tweet-compose').keyup(function(){
    	var charactersLeft = 140 - $(this).val().length;
    	$('#char-count').text(charactersLeft);
    	if(charactersLeft <= 10){
    		$('#char-count').css('color', 'red');
    	}else{
    		$('#char-count').css('color', 'black');
    	};
    	if(charactersLeft < 0){
    		$('button').prop("disabled", true);
		}else{
			$('button').removeAttr('disabled');
		};
	});
	$('#newTweet').hide();
	
	$('.button').click(function(){
		var tweet = $('#newTweet').clone(true);
		tweet.removeAttr('id');
		tweet.css({display: 'block'});
		$('#stream').prepend(tweet);
		$('#newTweetText').text($('.tweet-compose').val());
	})
	$('.tweet-actions').hide();

	$('.tweet').hover(function(){
		$(this).find('.tweet-actions').toggle();
	})
	$('.stats').hide();

	$('.tweet').click(function(){
		$(this).find('.stats').toggle();
	})
	$('.reply').hide();

	$('.tweet').click(function(){
		$(this).find('.reply').toggle();
	})


	
});