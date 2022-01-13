var randomNumber1 = Math.floor(Math.random()*6)+ 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/"+ randomDiceImage

var img1 = document.querySelectorAll("img")[0]
img1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6)+ 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/"+ randomDiceImage2

var img2 = document.querySelectorAll("img")[1]
img2.setAttribute("src",randomImageSource2);


var p = document.querySelectorAll("p")[0]


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Win Player 1"
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Win Player 2"
}else {
    document.querySelector("h1").innerHTML = "Draw"
}