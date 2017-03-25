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
   leftCol[1] = "Physical Experience";
   leftCol[2] = "Medical Product";
   leftCol[3] = "Social Innovation";
   leftCol[4] = "Innovation Policy";
   leftCol[5] = "Tangible Interaction";
   leftCol[6] = "Systems Solutions";
   leftCol[7] = "Empowering Experience";
   leftCol[8] = "Economic Policy";
   leftCol[9] = "(wildcard)";
   leftCol[10] = "(wildcard)";
   leftCol[11] = "(wildcard)";

   rightCol[0] = " ";
   rightCol[1] = "Changes Lives";
   rightCol[2] = "Changes Minds";
   rightCol[3] = "Changes Expectations";
   rightCol[4] = "Changes Economies";
   rightCol[5] = "(wildcard)";
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
  text("The", textLeft, 200);
  text("That", textLeft + 500, 200);
  rect(textLeft + 300, 200, 200, 72);
  rect(textLeft + 800, 200, 200, 72);

  push();
  fill('#88B04B');
  fill(255);
  textSize(16);
  text(leftCol[retriever1], textLeft + 200+6, 200);
  text(rightCol[retriever2], textLeft + 700+6, 200);
  pop();

  push();
  fill('#88B04B');
  fill(r,g,b)
  noStroke();
  if (spinning == 1){
  //rotate(PI/3.0);
  }
  rect(120,200,40,40);
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

      retriever1 = int(random(1,11));

      retriever2 = int(random(1,5));


  }
}