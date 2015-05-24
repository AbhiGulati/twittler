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
  $tweet_msg.html('<a class="username" href="javascript:void(0);">' + '@' + tweet.user + '</a>' + ': ' + tweet.message);

  var $tweet_timestamp = $('<div></div>');
  $tweet_timestamp.addClass("display-time");
  $tweet_timestamp.text(tweet.created_at);

  var $tweet = $('<div></div>');
  $tweet.append($tweet_msg).append($tweet_timestamp);
  $tweet.addClass("tweet");
  $("#tweet-display").prepend($tweet);
}

function clearTweetDisplay() {
  $(".tweet").remove();
}

function showUserTimeline(user) {
  clearTweetDisplay();
  if(!streams.users[user]) {
    alert("invalid username");
    return;
  }

  for(var i=0; i < streams.users[user].length; i++) {
    displayNewTweet(streams.users[user][i]);
  }
}
