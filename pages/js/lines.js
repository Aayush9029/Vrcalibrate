function setup() {
    frameRate(30);
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, height, height, height);
    background(0);
    stroke(255);
    strokeWeight(2);
    noFill();
}


function draw() {
    background(0);

    translate(mouseX, mouseY);
    for (var i = 0; i < width; i += 20) {
        stroke(i, width, width);
        line(i, -height / 2, i, height / 2);
    }
    for (var i = 0; i < height; i += 20) {
        stroke(i, height, height);
        line(-width / 2, i, width / 2, i);
    }
}