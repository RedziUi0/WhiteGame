class Greeting {
    constructor(){

//this.salutation = createElement("Hello")
this.greeting = createElement('h2');
this.greeting2 = createElement('h2');
this.continue = createButton('Continue')

}

display(){

    this.greeting.html("Welcome to the world of coding! We are going to learn JavaScript's Basic Concept ")
    this.greeting.position(displayWidth/2 - 400, displayHeight/4-100);

    this.greeting2.html("and it's going to be fun! ")
    this.greeting2.position(displayWidth/2 - 400, displayHeight/4-80);

    this.continue.position(displayWidth/2 - 400, displayHeight/4);

    this.continue.mousePressed(()=>{

        this.greeting.hide();
        this.greeting2.hide();
        this.continue.hide();
        ConceptPage.display();
        
  
      });
}
}