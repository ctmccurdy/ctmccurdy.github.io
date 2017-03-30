var spinning = 0;
var r,g,b;

var retriever1 = 0;
var retriever2 = 0;
var leftCol = [];
var rightCol = [];


function setup() {
  createCanvas(2000, 800);
   r = random(255);
   g = random(255);
   b = random(255);


   leftCol[0] = " ";
   leftCol[1] = "Sustainability";
   leftCol[2] = "Focusing on Performance";
   leftCol[3] = "Impact";
   leftCol[4] = "Aesthetics";
   leftCol[5] = "Social Innovation";
   leftCol[6] = "Overarching Story";
   
   leftCol[7] = "The Food and Drug Administration";
   leftCol[8] = "Service Design";
   leftCol[9] = "Apps";

   leftCol[10] = "Imperfect Technology";
   leftCol[11] = "Risky Ventures";
   leftCol[12] = "Long Transitions ";
   leftCol[13] = "Empathy "; 

   leftCol[14] = "People ";
   leftCol[15] = "Things ";
   leftCol[16] = "Imagining Futures";
   leftCol[17] = " ";


   rightCol[0] = " ";
   rightCol[1] = "Time";
   rightCol[2] = "Design Thinking";
   rightCol[3] = "Ecosystems";
   rightCol[4] = "Culture";
   rightCol[5] = "Backcasting";

   rightCol[6] = "Healthcare Delivery";
   rightCol[7] = "Robotics";
   rightCol[8] = "Caregiving";

   rightCol[9] = "Ecosystems ";
   rightCol[10] = "Public Policy ";
   rightCol[11] = "Competitiveness ";
   rightCol[12] = "Ecosystem Innovation ";


   rightCol[13] = "the Possible ";
   rightCol[14] = "the Practical ";
   rightCol[15] = "the Plausible ";
   rightCol[16] = " ";



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
  text(leftCol[retriever1], textLeft + 400+12, 200);
  text(rightCol[retriever2], textLeft + 300+12, 300);
  pop();

  push();
  fill('#88B04B');
  fill(r,g,b)
  noStroke();
  if (spinning == 1){
  //rotate(PI/3.0);
  }
  rect(120,200,40,40);

  textSize(24);
  text("#ISDANEDDC #howmight", textLeft, 500);
  pop();

  



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

      retriever1 = int(random(1,17));

      retriever2 = int(random(1,16));


  }
}