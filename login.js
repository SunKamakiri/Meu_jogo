class Login{
    constructor(){
        this.titleGame = createElement("h1","Guardião das Terras-Mágicas");
        this.buttonPlay = createButton("Jogar");
        this.input = createInput("").attribute("placeHolder","Digite o nome do seu elfo");
    }

    hide(){
        this.titleGame.hide();
        this.buttonPlay.hide();
        this.input.hide();
    }

    setElementsPos(){
        this.input.position(width/2 -110, height/2 -80);
        this.buttonPlay.position(width/2 -90, height/2 -20);
        this.titleGame.position(width/2 -90, height/2 -200);
    }

    setStyle(){

    }

    handleMousePressed(){
        this.buttonPlay.mousePressed(()=>{
            this.buttonPlay.hide();
            this.input.hide();
            player.name = this.input.value();
            gameState = 1;  
        })
    }

    display(){
        this.setElementsPos();
        this.handleMousePressed();
    }
}