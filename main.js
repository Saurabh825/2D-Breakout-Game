//creating a game variable ,and assining the width, height
var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
  preload: preload, create: create, update: update
});

//loading asset and priting them on screen ; 
var ball; 




function preload() {
  //  to scale the canvas as full width and height without making its size ratio untouchable; 
game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
game.scale.pageAlignHorizontally = true;
game.scale.pageAlignVertically = true;
// for making background; 
game.stage.backgroundColor = '#eee';
// using for loading the image in canvas ; 
game.load.image('ball', './ball.png');
}


function create() {
  //after loading the image now rendering the image on canvas , for this use .add.sprit() function; 
  //  The first two parameters are the top and left positions on the screen and
  //  the third one is the name of the asset we defined earlier.
  
  game.physics.startSystem(Phaser.Physics.ARCADE);
  ball = game.add.sprite(50, 50, 'ball');
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.collideWorldBounds= true; 
  ball.body.bounce.set(1);
  ball.body.velocity.set(150, 150);
}

//moving the ball into the screen; 
function update() {
  // ball.x+=1
  // ball.y+=1
}