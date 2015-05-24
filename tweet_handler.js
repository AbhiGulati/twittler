var currentUser = undefined //user, if any, whose timeline is being displayed
var intervalID
$(document).ready(function() {        
  var $display = $("#tweet-display");
  for(var index=0; index < streams.home.length; index++) {
    var tweet = streams.home[index];
    displayNewTweet(tweet);
  }

  intervalID = setInterval(function() {refreshTweetDisplay(currentUser);}, 10000);

  $("#return-to-feed").css("display", "none");
  $("#return-to-feed").on("click", function() {
    currentUser = undefined;
    var displayLabel = $("body").find("#display-type");
    displayLabel.text("Your feed");
    refreshTweetDisplay();
  })
});


function refreshTweetDisplay(user) {
  if(!user) {
    clearTweetDisplay();
    for(var i=0; i < streams.home.length; i++) {
      displayNewTweet(streams.home[i]);
    }
  }
  else {
    showUserTimeline(user);
  }
}

function displayNewTweet(tweet) {  
  var $tweet_msg = $('<div></div>');
  $tweet_msg.addClass("display-msg");
  $tweet_msg.html('<a class="username" href="javascript:void(0);">' + '@' + tweet.user + '</a>' + ': ' + tweet.message);
  $tweet_msg.find(".username").on("click", function() {
    showUserTimeline(tweet.user);
  })

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
  if(user[0] === "@") user = user.slice(1);

  if(!streams.users[user]) {
    alert("invalid username" + user);
    return;
  }

  currentUser = user;

  //update display label
  var displayLabel = $("body").find("#display-type");
  displayLabel.text(user + "'s timeline");

  //make button visible
  $("#return-to-feed").css("display", "block");

  //display only tweets from this user
  clearTweetDisplay();
  for(var i=0; i < streams.users[user].length; i++) {
    displayNewTweet(streams.users[user][i]);
  }
}
