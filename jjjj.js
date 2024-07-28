var colourArray = ["red","blue","yellow","green"];

var bot = [];
var player = [];

var level = 0;
var started = false;

function gameBot(){

    level++;
    $("h1").text("level " + level);
    player = [];

    var randNum = Math.random();
    randNum = Math.floor(randNum * 4);

    var randColour = colourArray[randNum];
    bot.push(randColour);
    console.log(bot);
    $("." + randColour).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randColour + ".mp3");
    audio.play();

}

$(document).keypress(function (){

    if (!started){

        gameBot();
        $("h1").text("level " + level);
        started = true;
    }
    playerGame();

});

function playerGame(){

    $(".btn").click(function(){

        var yes = $(this);
        var audio2 = new Audio("sounds/" + yes.attr("id") + ".mp3")
        audio2.play();
        player.push(yes.attr("id"));
        console.log(player);

        yes.addClass("pressed");
        setTimeout(function(){

            $(yes).removeClass("pressed");

        },100);
        if (bot[player.length - 1] === player[player.length - 1]){
            if (bot.length === player.length){

        
                setTimeout(function(){

                    gameBot();
                },1000)
            }
                
            
        

        }else {

            var audio3 = new Audio("sounds/wrong.mp3");
            audio3.play();
            $("body").addClass("game-over");
            setTimeout(function(){

                $("body").removeClass("game-over");

            },400);
            $("h1").text("Game Over, Press Any Key to Restart")
            level = 0;
            bot = [];
            started = false;
        }


    });


};

