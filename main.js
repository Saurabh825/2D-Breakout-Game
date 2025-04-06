var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {preload: preload, create: create, update: update});

let ball; 


//  using preload function of phaser , that loads the game every time before starting 
function preload() {
  //  in loading we have to set the scale  and background of canvas ,for which using show_All , a
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor ="#eee";
  game.load.image("ball", "img/ball.png"); // adding image at the time of preloading 
}

// adding the ball into the game ; 
function create() {
ball = game.add.sprite("50", "50", "ball") // first two arguments are the postion where you want to add the ball and the third one is assert name 
}
function update() {}