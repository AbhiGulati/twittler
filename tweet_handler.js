$(document).ready(function() {        
  var $body = $('body');
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.addClass("tweet");
    $tweet.appendTo($body);
    index -= 1;
  }

  $("button").on("click", refreshTweetDisplay);  
});


function refreshTweetDisplay() {
  alert("button clicked");
  var numDisplayedTweets = $(".tweet").length;
  if(numDisplayedTweets < streams.home.length) {
    console.log(numDisplayedTweets + "," + streams.home.length);
    var index = numDisplayedTweets;
    while(index < streams.home.length) {
      var $body = $('body');
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      $tweet.addClass("tweet");
      $(".tweet").first().before($tweet);
      console.log($(".tweet").first().text());
      index += 1;
    }
  }
}
