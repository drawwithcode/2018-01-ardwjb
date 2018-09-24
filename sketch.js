function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(1000,1000);
  background(102,102,127);
}

function draw() {
  // put drawing code here
noStroke();
//draw the head
  fill(249,63,50);
  rect(410,320,40,80);//头红色
  fill(249,63,50);
  ellipse(410,360,20,20);//耳朵
  fill(50);
  rect(420,330,20,60);//脸黑色
  fill(182,246,255);
  ellipseMode(CORNER);
  ellipse(422,360,15,15);//眼睛
  fill(50);
  rect(397,310,4,60);//天线
  //draw the neck
  fill(50);
  ellipse(415,400,30,30);
  //draw the body
  fill(50);
  ellipse(365,420,50,50);
  ellipse(445,420,50,50);//左右肩膀关节
  fill(50);
  ellipse(410,470,40,40);//腰部关节
  fill(220);
  rect(405,410,50,80);//胸中
  fill(100);
  rect(427,428,7,44);
  fill(182,246,255);
  rect(429,430,3,40);//胸logo
  fill(249,63,50);
  rect(385,415,20,60);
  rect(455,415,20,60);//胸左右
  fill(50);
  ellipse(390,510,20,20);
  ellipse(450,510,20,20);//左右胯膀关节
  fill(220);
  rect(410,505,40,40);//胯中
  fill(249,63,50);
  rect(400,505,10,35);
  rect(450,505,10,35);//胯左右
  //draw the legs
  fill(50);
  rect(373,567,22,15);
  rect(465,567,22,15);//左右膝关节
  fill(249,63,50);
  rect(370,502,10,60);
  rect(480,502,10,60);//左右大腿外侧
  rect(377,500,15,70);
  rect(468,500,15,70);//左右大腿内侧
  fill(249,63,50);
  rect(377,582,5,40);
  rect(478,582,5,40);//左右小腿外侧
  rect(382,580,10,60);
  rect(468,580,10,60);//左右小腿内侧
  fill(50);
  rect(375,635,22,10);
  rect(463,635,22,10);//左右脚背
  fill(249,63,50);
  rect(370,640,30,10);
  rect(460,640,30,10);//左右脚掌
  //draw the arms
  fill(50);
  rect(318,517,35,20);
  rect(507,517,35,20);//左右肘关节
  fill(50);
  ellipse(330,600,20,20);
  ellipse(510,600,20,20);//手腕关节
  fill(220);
  rect(350,410,20,60);
  rect(490,410,20,60);//上臂内侧白色
  fill(50);
  rect(305,395,15,80);
  rect(540,395,15,80);//上臂外侧黑色
  fill(249,63,50);
  rect(325,315,25,205);
  rect(510,315,25,205);//上臂内侧红
  rect(315,355,35,140);
  rect(510,355,35,140);//上臂外侧红色
  rect(330,535,20,70);
  rect(510,535,20,70);//小臂内侧红
  rect(320,540,30,50);
  rect(510,540,30,50);//小臂外侧红色
  fill(50);
  rect(335,630,20,15);
  rect(505,630,20,15);
  rect(335,615,10,25);
  rect(515,615,10,25);//手掌
  fill(249,63,50);
  rect(325,615,10,30);
  rect(525,615,10,30);//手背

}
