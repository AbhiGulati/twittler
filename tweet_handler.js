$(document).ready(function() {        
  var $display = $("#tweet-display");
  for(var index=0; index < streams.home.length; index++) {
    var tweet = streams.home[index];
    displayNewTweet(tweet);
  }

  $("button").on("click", refreshTweetDisplay);  
});


function refreshTweetDisplay() {
  var numDisplayedTweets = $(".tweet").length;
  if(numDisplayedTweets < streams.home.length) {
    var index = numDisplayedTweets;
    while(index < streams.home.length) {
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.addClass("tweet");
      $(".tweet").first().before($tweet);
      index += 1;
    }
  }
}

function displayNewTweet(tweet) {
  $display = $("#tweet-display");
  var $tweet = $('<div></div>');
  $tweet.text('@' + tweet.user + ': ' + tweet.message);
  $tweet.addClass("tweet");
  $display.prepend($tweet);
}
