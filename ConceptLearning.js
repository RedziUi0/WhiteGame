class Concept{
    constructor(){

this.text1 = createElement('h3')
this.text2 = createElement('h3')
this.text3 = createElement('h3')
this.text4 = createElement('h3')
this.text5 = createElement('h3')

this.quiz = createButton("Let's a have Quiz on what we have learned till now!")
    }
display(){
this.text1.html("Before we learn JavaScript let's learn what's a programming lannguage and how can we use it.")
this.text1.position(displayWidth/2 - 400, 30)

var arrow;
arrow = createSprite(displayWidth/2-30 , 30+120,10,10);
arrow.addImage(arrowImg);
arrow.scale = 0.3;

this.text3.html("It is a type of written language that tells computers what to do. They are used to write all computer ")
this.text3.position(displayWidth/2 - 258, arrow.y+103)

this.text2.html("Like, how soldies get commands from their seniors and have to act according to the commands given by their seniors, the same is in programing languages.")
this.text2.position(displayWidth/2 - 450, arrow.y+80)

this.text4.html("Examples are: Python, Ruby, Java, JavaScript, C, C++, and C#.")
this.text4.position(displayWidth/2 - 450, arrow.y+143)

this.text5.html("programs and computer software.")
this.text5.position(displayWidth/2 - 450, arrow.y+123)


this.quiz.position(displayWidth/2-140, displayHeight/2+30)

this.quiz.mousePressed(()=>{

    this.text1.hide();
    this.text2.hide();
    this.text3.hide();
    this.text4.hide();
    this.text5.hide();

    this.quiz.hide();
    arrow.scale=0.001;

    QuizPage.display();
    

  });

}
}