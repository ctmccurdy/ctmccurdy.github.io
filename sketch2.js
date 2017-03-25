function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  strokeWeight(2);
  fill(255);
  textFont("Proxima Nova");
  textSize(12 + (mouseX / width)*72);
  text("Attention, please.", 50, 200);
}