var spinning = 0;
var r,g,b;

var retriever1 = 0;
var retriever2 = 0;
var leftCol = [];
var rightCol = [];


var counter = 0;

function setup() {
  createCanvas(2000, 800);
  frameRate(24);
   r = random(255);
   g = random(255);
   b = random(255);


   leftCol[0] = " ";

   //MARK G
   leftCol[1] = "Healthier Future";
   leftCol[2] = "Science/Technology";
   leftCol[3] = "Usability Studies";
   leftCol[4] = "Heuristic Analyses";
   leftCol[5] = "Aging in Place";
   leftCol[6] = "Robots";
   leftCol[7] = "Caregiving";

//Charlie C
   leftCol[8] = "Sustainability";
   leftCol[9] = "Performance";
   leftCol[10] = "Aesthetics";
   leftCol[11] = "Social Innovation";
   leftCol[12] = "Impact";
   leftCol[13] = "Designing with  "; 
   leftCol[14] = "Strategy ";

//Mark H
   leftCol[15] = "Design Thinking ";
   leftCol[16] = "Economic Developement";
   leftCol[17] = "New Functionalities ";
   leftCol[18] = "New Experiences ";
   leftCol[19] = "Aging ";
   leftCol[20] = "Senior Caregiving ";
   leftCol[21] = "Systems Thinking ";
   leftCol[22] = "Human Centered Thinking ";

//Matt W
   leftCol[23] = "People ";
   leftCol[24] = "Things ";
   leftCol[25] = "the Possible ";


   leftCol[26] = " ";
   leftCol[27] = " ";
   leftCol[28] = " ";
   leftCol[29] = " ";
   leftCol[30] = " ";
   leftCol[31] = " ";
   leftCol[32] = " ";


   rightCol[0] = " ";

    //MARK G
   rightCol[1] = "Health Management";
   rightCol[2] = "Connected Devices";
   rightCol[3] = "User Experience";
   rightCol[4] = "Mitigated Risk";
   rightCol[5] = "The Food and Drug Administration";
   rightCol[6] = "Service Design";
   rightCol[7] = "Apps";

//Charlie C
   rightCol[8] = "Design Thinking";
   rightCol[9] = "Portfolios ";
   rightCol[10] = "Ecosystems ";
   rightCol[11] = "Options";
   rightCol[12] = "Culture";
   rightCol[13] = "Backcasting";

//Mark H
   rightCol[14] = "Empathy ";
   rightCol[15] = "the Silver Economy ";
   rightCol[16] = "Imperfect Technology ";
   rightCol[17] = "Risky Ventures ";
   rightCol[18] = "Long Transitions ";
   rightCol[19] = "Ecosystems ";   
   rightCol[20] = "Public Policy ";
   rightCol[21] = "Competitiveness ";
   rightCol[22] = "Ecosystem Innovation ";

//MattW
   rightCol[23] = "the Practical ";
   rightCol[24] = "the Plausible ";
   rightCol[25] = "Imagining Futures ";


   rightCol[26] = " ";
   rightCol[27] = " ";   
   rightCol[28] = " ";
   rightCol[29] = " ";
   rightCol[30] = " ";
   rightCol[31] = " ";
}


function draw() {
  background(255);

  strokeWeight(2);
  fill(0);
  textFont("Proxima Nova");
  textSize(72);
  var textLeft = 200;
  textAlign(LEFT,CENTER)
  rectMode(CENTER)
  text("How might", textLeft, 200);
  text("change", textLeft, 300);
  rect(textLeft + 700, 200, 600, 72);
  rect(textLeft + 600, 300, 600, 72);

  push();
  fill('#88B04B');
  fill(255);
  textSize(36);

  if (counter <30){
  text(leftCol[retriever1], textLeft + 400+12, 200);
}
if (counter < 5){
  text(rightCol[retriever2], textLeft + 300+12, 300);
}

  // fill(0, counter+100);
  // rect(textLeft + 700, 200, 600, 72);
  // rect(textLeft + 600, 300, 600, 72);




  pop();



  push();
  fill('#88B04B');
  fill(r,g,b)
  noStroke();
  if (spinning == 1){
  //rotate(PI/3.0);
  }
  translate(120,200);
  if (counter > 40){
    rotate(-counter/PI);
  }
  rect(0,0,40,40);
  //rect(120,200,40,40);
  pop();

  push();
  fill(r,g,b);
  textSize(24);
  text("#ISDANEDDC #howmight", textLeft, 500);
  pop();

  

  if (counter > 0){
    counter = counter - 1;
  }


   var d = dist(mouseX, mouseY, 120, 200);
   if (d < 20) {
     spinning = true;
   } else {
     spinning = false;
   }

}

function mousePressed() {
  // Check if mouse is inside the circle
  var c = dist(mouseX, mouseY, 120, 200);
  if (c < 20) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);

      retriever1 = int(random(1,26));           //CHANGE THIS TO ONE MORE THAN THE ARRAY LENGTH

      retriever2 = int(random(1,26));

      counter = 50;

  }
}