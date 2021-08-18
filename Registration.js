class Registration {
    constructor() {

        this.title = createElement('h1')
        this.button = createButton('Submit');
        this.input = createInput("Name");
        this.age = createInput("Age");
     
 
      }
      hide(){

        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.age.hide();
      }
      display(){

        var register;
        register = createSprite(displayWidth/2 , displayHeight/2-100);
        register.addImage(registrationImg);
        register.scale = 4.7;

        this.title.html("Registration Page");
        this.title.position(displayWidth/2 - 200, 30);
    

    this.input.position(displayWidth/2 - 200 , displayHeight/2 - 280);
    this.age.position(displayWidth/2 - 200 , displayHeight/2 - 250);
    this.button.position(displayWidth/2 + 30, displayHeight/2-130);



    this.button.mousePressed(()=>{

      this.input.hide();
      this.button.hide();
      this.title.hide();
      this.age.hide();
      greetingPage.display();
      

    });

      }
    }
