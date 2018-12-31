var time = document.getElementById("countdownTimer");
var coutndownDate = new Date("Jan 1 ,2019 00:00:00").getTime();
var play = document.getElementById("player");
var title = document.getElementById('title');
var coutdown = document.getElementsByClassName("countdown")[0];
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = coutndownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    time.innerHTML = '<div class="timer" s>' + days + ' </div><div class="timer">' + hours + ' </div><div class="timer">' + minutes + ' </div><div class="timer">' + seconds + '</div>';
    if (distance < 0) {
        clearInterval();
        time.innerHTML = '<h1 class="title">Happy New Year</h1>';
        play.play();
        coutdown.style.backgroundImage = "url('../Assets/giphy.gif')";
        title.style.display = 'none';
    }
    else {
        play.pause();
    }

});


