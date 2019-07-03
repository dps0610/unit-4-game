//Variables
var win = 0;
var loss = 0;
var randomNumberMin = 19;
var randomNumberMax = 120;
var crystalNumberMin = 1;
var crystalNumberMax = 12;
var playerNumber = 0;
var greenNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);
var redNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);
var blueNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);
var purpleNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);

function reset () {
    var randomNumber = Math.floor((Math.random() * (randomNumberMax - randomNumberMin)) + randomNumberMin);
    $(".random-number").text(randomNumber);
    greenNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);
    redNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);
    blueNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);
    purpleNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);
    playerNumber = 0;
    $(".your-score").text(playerNumber);
}


$("document").ready(function(){
    //Generate a random number to be displayed to the player
    var randomNumber = Math.floor((Math.random() * (randomNumberMax - randomNumberMin)) + randomNumberMin);
    console.log(randomNumber);

    $(".random-number").text(randomNumber);

    //var greenNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);
    //var redNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);
    //var blueNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);
    //var purpleNumber = Math.floor(Math.random() * crystalNumberMax + crystalNumberMin);

    $("#green-guy").on("click", function(){
        console.log(greenNumber);
        playerNumber += greenNumber;
        $(".your-score").text(playerNumber);
        if (playerNumber === randomNumber) {
            win++;
            $(".wins").text(win);
            reset();
        }
        if (playerNumber > randomNumber) {
            loss++;
            $(".losses").text(loss);
            reset();
        }
    });

    $("#red-guy").on("click", function(){
        console.log(redNumber);
        playerNumber += redNumber;
        $(".your-score").text(playerNumber);
        if (playerNumber === randomNumber) {
            win++;
            $(".wins").text(win);
            reset();
        }
        if (playerNumber > randomNumber) {
            loss++;
            $(".losses").text(loss);
            reset();
        }
    });

    $("#blue-guy").on("click", function(){
        console.log(blueNumber);
        playerNumber += blueNumber;
        $(".your-score").text(playerNumber);
        if (playerNumber === randomNumber) {
            win++;
            $(".wins").text(win);
            reset();
        }
        if (playerNumber > randomNumber) {
            loss++;
            $(".losses").text(loss);
            reset();
        }
    });

    $("#purple-guy").on("click", function(){
        console.log(purpleNumber);
        playerNumber += purpleNumber;
        $(".your-score").text(playerNumber);
        if (playerNumber === randomNumber) {
            win++;
            $(".wins").text(win);
            reset ();
        }
        if (playerNumber > randomNumber) {
            loss++;
            $(".losses").text(loss);
            reset();
        }
    });
})    
