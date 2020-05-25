class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,100,20,20);
    car2=createSprite(200,100,20,20);
    car3=createSprite(300,100,20,20);
    car4=createSprite(400,100,20,20);
    cars=[car1,car2,car3,car4];

  }
  play(){
    form.hide();
    Player.getAllPlayers();
    if(allPlayer!==undefined){
      var index=0;
      var x=0;
      var y=0;
     var displayPosition=130;

    for(var plr in allPlayer){
      index=index+1;
      x=x+200;
      y=displayHeight-allPlayer[plr].distance;
      cars[index-1].x=x;
      cars[index-1].y=y;
      if(index===player.index){
        cars[index-1].shapeColor="red";
        camera.position.x=displayWidth/2;
        camera.position.y=cars[index-1].y;

      }
     }
     
    }
    if(keyDown(UP_ARROW)){
      player.distance=player.distance+50;
      player.update();
    }
    drawSprites();
  }
}
