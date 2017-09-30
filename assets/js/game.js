var gameStarted = false;
var gameOver = false;
var intervalId;
var clockRunning = false;
var timer = stopwatch;
var score = 0;
var pokeId;

$(document).ready(function() {

    $("#start").click(function() {
        displayLoadingScreen();            
        $(this).css("background-color", "#FF0000");
        $(this).html("GO!");
        gameStarted = true;
        var score = 0;
        createChoices();
    });
    
    $(document).on("click", ".radio", function() {
        allowSubmit();
    });
    
    $(document).on("click", "#submitButton", function() {
        displayLoadingScreen();
        disableSubmit();
        var selected = $('input[name="optradio"]:checked').val();

        if( selected === pokeId + "") {
            score += timer.getPoints();
            $("#score").html("Score<br>" + score);
        } else {
            score -= timer.getPoints();
            $("#score").html("Score<br>" + score);
        }

        timer.resetPoints();
        createChoices();
    });
});

function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

function getImage(id, parent) {
    var img = createImg("pokeImg", formatImgSrc(id));
    $(parent).append(img);    
}

function createChoices() {
    $("#answerArea").empty();
    $("#questionArea").empty();
    var choices= [];
    while(choices.length < 5) {
        var id = getRandomId();
        if(!choices.includes(id)) {
            choices.push(id);
        }
    }

    var randomSlots = []
    while(randomSlots.length < 5){
        var randomnumber = Math.floor(Math.random() * 5);
        if(randomSlots.indexOf(randomnumber) > -1) continue;
            randomSlots[randomSlots.length] = randomnumber;
    }

    for(var i = 0; i < choices.length-1; i++) {
        $("#answerArea").append
        (
            createRadioButton(choices[randomSlots[i]], 
            pokeList[choices[randomSlots[i]]])
        );
    }

    pokeId = choices[randomSlots[Math.floor(Math.random() * 4)]];
    initInfo(id);
}
