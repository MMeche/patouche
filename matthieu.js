function setup() {
  print('Hello World');
  createCanvas(800,800);
  
}

// function keyPressed()
// {
//   if(keyCode === UP_ARROW
// }


let joueur = {
  'x' : 400, 'y' : 400, 'w' : 50, 'h' : 50
};

const speed_ini = 25;
let speed = speed_ini;


function draw() {
    
  
  background(255); //valeur entre 0 et 255, niveaux de gris
  fill(0,0,0);
  let isPressed;
  if(keyIsPressed === true){
    isPressed = true;
    if(keyIsDown(LEFT_ARROW)){
      joueur.x+=-speed;
      if(joueur.x < -25){
        joueur.x=824;
      }
    }
    if(keyIsDown(RIGHT_ARROW)){
      joueur.x+=speed;
      if(joueur.x > 825){
        joueur.x=-24;
      }
    }
    if(keyIsDown(UP_ARROW)){
      joueur.y+=-speed;
      if(joueur.y < -25){
        joueur.y=824;
      }
    }
    if(keyIsDown(DOWN_ARROW)){
      joueur.y+=speed;
      if(joueur.y > 825){
        joueur.y=-24;
      }
    }
    speed += 0.001 * speed;
  }else{
    speed = speed_ini;
    isPressed = false;
  }
  rect(joueur.x,joueur.y,joueur.w,joueur.h);
  ellipse(25,25,25);
  frameRate(120);
  
}
