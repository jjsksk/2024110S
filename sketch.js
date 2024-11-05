 let angle=0
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)//背景黑色
  angleMode(DEGREES)//設定使用的角度
  frameRate(10)
}

function draw() {
  
  //background(220);
  background(0)
  translate(width/2,height/2)
  noFill()
  stroke(255)
  rectMode(CENTER)//方形座標在圖中心
  for(let i=0;i<200;i=i+1){
    //let r=random(50,255)
    //let b=random(50,255)
    //let g=random(50,255)
  let r= map(sin(frameCount),-1,1,50,255)
  let g= map(cos(frameCount/2),-1,1,50,255)
  let b= map(sin(frameCount/4),-1,1,50,255)
  stroke(r,g,b)

  rotate(sin(angle-10*i)*5)
  rect(0,0,600-3*i,600-3*i,100)
}
angle=angle+10
}