var canvas, backgroundImage,arrowImg,registrationImg;
var registrationPage,greetingPage,ConceptPage,QuizPage;

function preload(){

arrowImg = loadImage("images/arrow.png");
registrationImg = loadImage("images/registrationBackground.jpg");

}

function setup(){

  canvas = createCanvas(displayWidth-20,displayHeight-20);
  registrationImg.scale = 0.3;
  registrationPage = new Registration();
  greetingPage = new Greeting();
  ConceptPage = new Concept();
  QuizPage = new Quiz();

}

function draw(){
background("grey");

registrationPage.display();

drawSprites();

}