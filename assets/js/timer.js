window.onload = function() {
    $("#start").on("click", stopwatch.start);
  };
  
  var intervalId;
  var clockRunning = false;
  var stopwatch = {
    // time: 300,
    time: 120,
    pointValue: 100,
    reset: function() {
      stopwatch.time = 120;
      $("#timer").html("Time<br>" + "05:00");
      $("#points").html("Points<br>" + 100);
      stopwatch.resetPoints;
    },
    start: function() {
      if (!clockRunning) {
          intervalId = setInterval(stopwatch.count, 1000);
          clockRunning = true;
      }
    },
    stop: function() {
      clearInterval(intervalId);
      clockRunning = false;
    },
    count: function() {
      stopwatch.time--;

      if(stopwatch.pointValue > 0)
        stopwatch.pointValue -= 5;

      var converted = stopwatch.timeConverter(stopwatch.time);
      
      $("#timer").html("Time<br>" + converted);
      $("#points").html("Points<br>" + stopwatch.pointValue);
      
      if(stopwatch.time === 0) {
          stopwatch.stop();
      }
    
      if(points <= 0)
        nextQuestion();
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconds;
    },
    resetPoints: function() {
        stopwatch.pointValue = 100;
    },
    getPoints: function() {
        return stopwatch.pointValue;
    }
  };