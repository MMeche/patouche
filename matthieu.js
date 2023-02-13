const speed_ini = 25;
let speed = speed_ini;
const canvasW = 800;
const canvasH = 800;

let joueur = {
  'x' : 400, 'y' : 400, 'w' : 50, 'h' : 50
};


let sol = { //sol
  'x1' : 0, 'x2' : canvasW, 'y1' : canvasH, 'y2' : canvasH, 'nature' : 'sol'
}; 
let obstacle_rect_1 ={ //rect
  'x' : canvasW/2, 'y': canvasH-100, 'w':100, 'h': 100, 'nature' : 'rect'
}
let ensemble_collision = [sol,obstacle_rect_1];

function collision(tab_murs,joueur){
  let center_x = joueur.x + joueur.w/2;
  let center_y = joueur.y + joueur.h/2;
  tab_murs.forEach(element => {
    if(element.nature==='sol' && center_y > element.y1-joueur.h/2){
      joueur.y = element.y1 -joueur.h;
    }
    if(element.nature ==='rect'){
      
    }
  });
}

function setup() {
  print('Hello World');
  createCanvas(canvasW,canvasH);
  
}

// function keyPressed()
// {
//   if(keyCode === UP_ARROW
// }

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
  collision(ensemble_collision,joueur);
  rect(joueur.x,joueur.y,joueur.w,joueur.h);
  frameRate(120);
  
}
