class Form{
constructor(){
this.input = createInput("Name");
this.button = createButton('Save');
this.welcome = createElement('h3');



}

hide(){
this.input.hide();
this.button.hide();
this.welcome.hide();


}



display(){
var title = createElement('h2');
title.html("Olympic Hurdle Game");
title.position(displayWidth/2-50,0);

this.input.position(displayWidth/2-40, displayHeight/2-80);
    this.button.position(displayWidth/2+40, displayHeight/2);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();


        player.name = this.input.value();
      
        playerCount+=1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        
        this.welcome.html("Hello " + player.name );
        this.welcome.position(displayWidth/2-70, displayHeight/4);



    })

    }





}