class Quiz{
    constructor(){
        this.title = createElement('h1')
        this.question1 = createElement('h3')

        this.Q1ansA = createButton('A: It is a type of written language that tells computers what to do.')
        this.Q1ansB = createButton('B: It is a type of written language that tells humans what to do.')
        this.Q1ansC = createButton('C: It is a set of languages used to execute an action.')


        this.question2 = createElement('h3')

        this.Q2ansA = createButton('A: Oracle.')
        this.Q2ansB = createButton('B: AWS.')
        this.Q2ansC = createButton('C: Python.')

        this.question3 = createElement('h3')

        this.Q3ansA = createButton('A: No.')
        this.Q3ansB = createButton('B: Yes.')
        this.Q3ansC = createButton('C: Not Applicable.')
    }

display(){

   //title
    this.title.html("Quiz");
    this.title.position(displayWidth/2 - 50, 30);

    //Question1
    this.question1.html("Q1) What is the definition of programming language?");
    this.question1.position(displayWidth/2 - 400 , displayHeight/2 - 280);

    this.Q1ansA.position(displayWidth/2 - 400 , displayHeight/2 - 200);
    this.Q1ansB.position(displayWidth/2 - 400 , displayHeight/2 - 170);
    this.Q1ansC.position(displayWidth/2 - 400 , displayHeight/2 - 140);


    //Question2
    this.question2.html("Q2) Example of Programming language.");
    this.question2.position(displayWidth/2 - 400 , displayHeight/2 - 70 );

    this.Q2ansA.position(displayWidth/2 - 400 , displayHeight/2 + 10);
    this.Q2ansB.position(displayWidth/2 - 400 , displayHeight/2 + 40);
    this.Q2ansC.position(displayWidth/2 - 400 , displayHeight/2 + 70);

    //Question3
    this.question3.html("Q3) Are Programming languages important in today's world?");
    this.question3.position(displayWidth/2 - 400 , displayHeight/2 + 150);

    this.Q3ansA.position(displayWidth/2 - 400 , displayHeight/2 + 210);
    this.Q3ansB.position(displayWidth/2 - 400 , displayHeight/2 + 240);
    this.Q3ansC.position(displayWidth/2 - 400 , displayHeight/2 + 270);

    this.Q1ansA.mousePressed(()=>{
        textSize(50)
        fill("green")
        text("Correct",displayWidth/2 - 400,displayHeight/2 - 120)
  
      });

}
}
