var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
 preload:preload, create:create, update:update
});
//DEFINING THE GLOBAL VARIABLE; 
var ball; 
var paddle ; 

//preloading of anything in canvas can we done here, 
function preload(){
  game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
  
  game.scale.pageAlignHorizontally =true; 
  
  game.scale.pageAlignVertically = true ; 

  game.stage.backgroundColor = "#eee"

  // game.load.image("ball",'./img/ball.png')
  game.load.image('ball', './img/ball.png'); //loading image 

  // game.load.image('paddle','./img/PADDLE.png')
  game.load.image('paddle', './img/PADDLE.png');
  

}
function create(){
//add.sprite()is used to render the thing on canvas ; 

ball = game.add.sprite(50, 50 , 'ball')
//DISPLAYING paddle on the canvas; 
paddle= game.add.sprite(game.world.width*0.5,game.world.height-5,'paddle'
)
//starting arcade physics in game ; 
game.physics.startSystem(Phaser.Physics.ARCADE)
//putting this thing(physic ) into the ball ; 
game.physics.enable(ball,Phaser.Physics.ARCADE)
game.physics.enable(paddle,Phaser.Physics.ARCADE)


//saying to take canvas ball as an boundary ; 
ball.body.collideWorldBounds = true;
//making ball bounce ; 
ball.body.bounce.set(1)
paddle.anchor.set(0.5,1)
ball.body.velocity.set(150, 150)
paddle.body.immovable=true; 

game.physics.arcade.checkCollision.down=false; 
ball.checkWorldBounds=true; 
ball.events.onOutOfBounds.add(function(){
  alert('Game over!');
  location.reload();
}, this);



}


function update(){
  //used to update the position on the screen, 
  // ball.x+=1; 
  // ball.y+=1; 
game.physics.arcade.collide(ball, paddle)
paddle.x = game.input.x || game.world.width*0.5;

}
