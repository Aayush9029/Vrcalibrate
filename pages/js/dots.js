let dotPadding = 20;
let dotRadius = 1;
let maxDotRadius = dotPadding;

let dotColorR = 255;
let dotColorG = 255;
let dotColorB = 255;

let currentShape = "circle";

let availableShapes = ["circle", "square"];

let filled = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    frameRate(30);
    background(0);
    noStroke();
    if (filled) {
        fill(dotColorR, dotColorG, dotColorB);
        noStroke();
    } else {
        noFill();
        stroke(dotColorR, dotColorG, dotColorB);
    }
    for (let i = dotPadding; i < width - dotPadding; i += dotPadding) {
        for (let j = dotPadding; j < height - dotPadding; j += dotPadding) {
            if (currentShape == "circle") {
                ellipse(i, j, dotRadius, dotRadius);
            }
            if (currentShape == "square") {
                rect(i, j, dotRadius, dotRadius);
            }

        }
    }

}

function toggleShape() {
    let shapeIndex = availableShapes.indexOf(currentShape);
    if (shapeIndex < availableShapes.length - 1) {
        currentShape = availableShapes[shapeIndex + 1];
    } else {
        currentShape = availableShapes[0];
    }
}

function toggleColor() {
    dotColorR = random(100, 255);
    dotColorG = random(100, 255);
    dotColorB = random(100, 255);

}

function toggleFill() {
    filled = !filled;
}

function zoomIn() {
    if (dotRadius < maxDotRadius) {
        dotRadius += 1;
    }
}

function zoomOut() {
    if (dotRadius > 1) {
        dotRadius -= 1;
    }
}

function reset() {
    dotRadius = 1;

    dotColorR = 255;
    dotColorG = 255;
    dotColorB = 255;

    filled = true;
}