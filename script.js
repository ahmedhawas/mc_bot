// Code goes here

$(function() {

  // var ipAddress = "192.168.111.111";
  var ipAddress = "localhost";

  var closeNotification = function(e) {
    $(".notifications").html("")
  }

  var displayNotification = function(text) {
    $(".notifications").text(text);
    $(".notifications").one("click", closeNotification);
  }

  var bindMovement = function(selector, data, successText, errorText) {
    $(selector).on("click", function() {
      $.ajax("http://" + ipAddress + ":8071/motion-control/update", {
        data: data,
        dataType: "jsonp",
        success: function() { displayNotification(successText) },
        error:   function() { displayNotification(errorText) }
      });
    });
  }

  bindMovement(
    ".forward",
    {forward: 1},
    "Your MC Hammer Bot is now moving forward.",
    "Your MC Hammer Bot is probably on fire."
  )

  bindMovement(
    ".stop",
    {forward: 0},
    "Your MC Hammer Bot is now stopped.",
    "Your MC Hammer Bot is probably on fire and still moving."
  )

  bindMovement(
    ".left",
    {turn: -1},
    "Your MC HammerBot is now spinning anticlockwise",
    "Your MC Hammer Bot is probably spinning on fire."
  )
  bindMovement(
    ".right",
    {turn: +1},
    "Your MC HammerBot is now spinning clockwise",
    "Your MC Hammer Bot is probably spinning on fire."
  )
})