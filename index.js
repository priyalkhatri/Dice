var randomnumber1 = Math.floor((Math.random() * 6)) + 1; //Generates random number from 1-6
var imgsrc = "images/" + "dice" + randomnumber1 + ".png"; //Will create string of source
var img1 = document.querySelectorAll("img")[0]; //select img1
img1.setAttribute("src", imgsrc); //change source through randomnumber generated

var randomnumber2 = Math.floor((Math.random() * 6)) + 1; //Generates random number from 1-6
var imgsrc = "images/" + "dice" + randomnumber2 + ".png"; //Will create string of source
var img2 = document.querySelectorAll("img")[1]; //select img1
img2.setAttribute("src", imgsrc); //change source through randomnumber generated

if(randomnumber1 > randomnumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
