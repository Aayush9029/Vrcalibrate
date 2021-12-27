let fontPadding = 50;
let fontSize = 50;

function setup() {
    frameRate(10);
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    fill(255);
}


function draw() {
    background(0);
    // fill screen with letters

    for (let i = fontPadding; i < width - fontPadding; i += fontSize) {
        for (let j = fontPadding; j < height - fontPadding; j += fontSize) {
            textSize(fontSize);
            text(int(random(0, 9)), i, j);
        }
    }
    noLoop();

}


function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}


function mouseWheel(event) {
    if (event.delta > 0) {
        fontSize += 10;
    } else {
        if (fontSize > 10) {

            fontSize -= 10;
        }
    }
    loop();
}