var randomnum1 = Math.floor(Math.random()*6)+1;

var diceimage = "dice" + randomnum1 + ".png";

var diceimagesrc = "./image/" + diceimage;

document.querySelector(".box1aa img").setAttribute("src",diceimagesrc);

var randonnum2= Math.floor(Math.random()*6)+1;
var diceimgsrc2= "./image/dice" + randonnum2 + ".png";

document.querySelector(".box1ab img").setAttribute("src",diceimgsrc2);

if(randomnum1 < randonnum2){
    document.querySelector("h2").innerHTML = "player 2 wins 🥇";
}
else if (randomnum1 > randonnum2) {
    document.querySelector("h2").innerHTML = "🥇 player 1 win";
}
else{
    document.querySelector("h2").innerHTML = "draw";
}