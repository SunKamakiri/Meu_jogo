class Game{
    constructor(){
        this.fraseHistoria = createElement("h4");  
        this.buttonHistoria = createButton("Começar a aventura!")
       
    }

    start(){
        login = new Login();
        login.display();

        this.buttonHistoria.hide();
        player = new Player();

        spritePlayer =  createSprite(565,515,20,50);
        spritePlayer.shapeColor = "green";

        enemies = new Group();
        this.addEnemies(enemies,10,"red");
    }

    historia(){
        login.hide();
        this.fraseHistoria.position(width/2 -90, height/2 -20)
        var conteudoFrase = `O Elfo ${login.input.value()}, 
        sempre sonhou em se tornar um mago, </br>
        com anos de pesquisa ele descobriu que para isso ele deve ir </br>
         até o Guardião das Terras-Mágicas que o concede a “licença” </br>
         para ser um mago apenas se ele for derrotado!`
         this.fraseHistoria.html(conteudoFrase);
        this.buttonHistoria.show();
        this.buttonHistoria.position(width/2 -90, height/2 + 80)
        this.handleMousePressedHistoria();
    }

    handleMousePressedHistoria(){
        this.buttonHistoria.mousePressed(()=>{
            this.buttonHistoria.hide();
            this.fraseHistoria.hide();
            gameState = 2;
        })
    }

    play(){

        this.handlePlayerControls();
        camera.position.x = spritePlayer.x;
        camera.position.y = spritePlayer.y;

        this.spawnEnemies();

        image(floor, 0,0, width*2, height*2);

        drawSprites();
    }

    addEnemies(spriteGroup,numberOfSprites,color){
        for(let i = 0; i < numberOfSprites; i++){
            let x,y;
            x = random(0,width*2);
            y = random(0,height*2);
            let sprite = createSprite(x,y,20,20);
            sprite.shapeColor = color;
            spriteGroup.add(sprite);
            sprite.velocityX = random(-3,3);
            sprite.velocityY = random(-3,3);
        }
    }

    handlePlayerControls(){
        if(keyDown("w")){
            spritePlayer.y -= 5;
        }

        if(keyDown("s")){
            spritePlayer.y += 5;
        }

        if(keyDown("a")){
            spritePlayer.x -= 5;
        }

        if(keyDown("d")){
            spritePlayer.x += 5;
        }
    }

    spawnEnemies(){

    }
}