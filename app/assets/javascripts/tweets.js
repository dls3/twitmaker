// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener("DOMContentLoaded", function() {

  $(function(){
    $('.new_tweet').on('submit', function(event){
      event.preventDefault();

      $.ajax({
        url: $(this).attr('action'),
        method: $(this).attr('method'),
        data: $(this).serialize(),
        dataType: 'json'
      }).done(function(responseData) {
        var tweets = document.querySelector('.tweets');
        var tweet = document.querySelector('li');
        tweet.className = 'tweet';

        var p = document.querySelector('p');
        p.innerHTML = responseData.message;
        tweet.appendChild(p);
        tweets.prepend(tweet);
      }).fail(function() {
        console.log("Error");
      }).always(function() {
        console.log("Button clicked");
      });
    });
  });
});
