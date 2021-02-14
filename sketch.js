function preload(){
  bg=loadImage("cricketbg.jpg")
}
function setup() {
  createCanvas(displayWidth,displayHeight-110);
  batsman=createSprite(690,435,20,20)
  bowler=createSprite(870,380,20,20)



}

function draw() {
  background(bg); 
  text (mouseX+","+mouseY,mouseX,mouseY) 

  defence=createButton("Defence")
  defence.position(60,200)

  straightDrive=createButton("Straight Drive")
  straightDrive.position(160,200)

  coverDrive=createButton(" Cover Drive")
  coverDrive.position(60,250)

  flick=createButton("Flick")
  flick.position(160,250)

  pull=createButton("Pull")
  pull.position(140,300)
  drawSprites();
}