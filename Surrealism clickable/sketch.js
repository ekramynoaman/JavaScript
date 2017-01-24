var posX1=50;
var posY1=50;
var posX2=150;
var posY2=90;
var posX3=350;
var posY3=160;
var posX4=310;
var posY4=350;
var posX5=430;
var posY5=300;
var posX6=550;
var posY6=240;
var posX7=490;
var posY7=400;
var posX8=600;
var posY8=550;
var posX9=720;
var posY9=590;




var velX;
var velY;
function setup() {
	createCanvas(1204,960);
	myEye=loadImage("assets/img1.png");
	myKite=loadImage("assets/img2.png");
	myStar=loadImage("assets/img4.png");
	myMoon=loadImage("assets/img5.png");
	myHorse=loadImage("assets/img6.png");
	myRabbit=loadImage("assets/img7.png");
	myHand=loadImage("assets/img8.png");
	myBody=loadImage("assets/img9.png");
	myBird=loadImage("assets/img10.png");

velX=random(1,2);
velY=random(-1,1);

}

function draw() {
background(255);
image(myEye,posX1,posY1);
posX1+=velX;
posY1+=velY;
image(myKite,posX2,posY2);
posX2+=velX;
posY2+=velY;
// image(myStar,posX3,posY3);
// posX3+=5;
// posY3+=5;
// image(myMoon,posX4,posY4);
// posX4+=5;
// posY4+=5;
// image(myHorse,posX5,posY5);
// posX5+=5;
// posY5+=5;
// image(myRabbit,posX6,posY6);
// posX6+=5;
// posY6+=5;
// image(myHand,posX7,posY7);
// posX7+=5;
// posY7+=5;
// image(myBody,posX8,posY8);
// posX8+=5;
// posY8+=5;
// image(myBird,posX9,posY9);
// posX9+=5;
// posY9+=5;


// image(myKite,100,150);
// image(myStar,200,250);
// image(myMoon,350,350);
// image(myHorse,450,450);
// image(myRabbit,550,550);
// image(myHand,650,650);
// image(myBody,750,550);
// image(myBird,750,650);
}


//clickable poem
// var myEye=document.getElementById("eye");
// myEye.addEventListener('click', function() {
// 	var myPoem = document.getElementById('poem');
// 	myPoem.innerHTML = "My siren is blue as the veins where she swims";
// });

// var myKite=document.getElementById("kite");
// myKite.addEventListener('click', function(){
// 	var myPoem = document.getElementById('poem');
// 	myPoem.innerHTML = "The trams make a noise like doughnut batter dropped in oil";
// });

// var myStar=document.getElementById("star");
// myStar.addEventListener('click', function(){
// 	var myPoem = document.getElementById('poem');
// 	myPoem.innerHTML = "He bursts the star with revolver shots to eternalize the birth of his son";
// });

// var myMoon=document.getElementById("moon");
// myMoon.addEventListener('click', function(){
// 	var myPoem = document.getElementById('poem');
// 	myPoem.innerHTML = "The world is a strange thing";
// });

// var myHorse=document.getElementById("horse");
// myHorse.addEventListener('click', function(){
// 	var myPoem = document.getElementById('poem');
// 	myPoem.innerHTML = "I circle around but the sky changes";
// });

// var myRabbit=document.getElementById("rabbit");
// myRabbit.addEventListener('click', function(){
// 	var myPoem = document.getElementById('poem');
// 	myPoem.innerHTML = "Yesterday I was a child";
// });

// var myHand=document.getElementById("hand");
// myHand.addEventListener('click', function(){
// 	var myPoem = document.getElementById('poem');
// 	myPoem.innerHTML = "The disciples of light have never invented anything but a not very opaque darkness";
// });

// var myBody=document.getElementById("body");
// myBody.addEventListener('click', function(){
// 	var myPoem = document.getElementById('poem');
// 	myPoem.innerHTML = "The river rolls the small body of a woman and that means the end is near";
// });

// var myBird=document.getElementById("bird");
// myBird.addEventListener('click', function(){
// 	var myPoem = document.getElementById('poem');
// 	myPoem.innerHTML = "Night jostles her stars and it rains sand and cotton";
// });
