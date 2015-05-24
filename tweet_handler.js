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
      displayNewTweet(streams.home[index]);
      index += 1;
    }
  }
}

function displayNewTweet(tweet) {  
  var $tweet_msg = $('<div></div>');
  $tweet_msg.addClass("display-msg");
  $tweet_msg.text('@' + tweet.user + ': ' + tweet.message);
  var $tweet = $('<div></div>');
  $tweet.append($tweet_msg);
  $tweet.addClass("tweet");
  $("#tweet-display").prepend($tweet);
}
