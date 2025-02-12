var easing = 0.05;
var x = 0;
var y = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}
//
function draw() {

    var smallMouseX = constrain(mouseX, 0, windowWidth);
    var smallMouseY = constrain(mouseY, 0, windowHeight);
    var eyeballx = map(smallMouseX, 0, windowWidth, 0, 40 * windowWidth / 800);
    var eyebally = map(smallMouseY, 0, windowHeight, 0, 40 * windowHeight / 600);
    var targetX = smallMouseX;
    var targetY = smallMouseY;
    var xmap = map(x, 0, width, 0, 40 * windowWidth / 800);
    var ymap = map(y, 0, height, 0, 40 * windowHeight / 600);
    x += (targetX - x) * easing;
    y += (targetY - y) * easing;

    background(155);
    fill(255);
    strokeCALC = windowWidth * windowHeight / 80000;
    //responsive stroke calculation
    strokeWeight(strokeCALC);
    radius = windowWidth * windowHeight / 24000;
    //responsive curve radius

    //responsive size character

    //face
    rect(windowWidth * 300 / 800, windowHeight * 100 / 600, windowWidth * 200 / 800, windowHeight * 400 / 600, radius, radius, radius, radius);

    //left eye
    strokeWeight(strokeCALC * 6 / 8);
    rect(335 * windowWidth / 800, 150 * windowHeight / 600, 50 * windowWidth / 800, 50 * windowHeight / 600, radius / 2, radius / 2, radius / 2, radius / 2);

    //right eye
    strokeWeight(strokeCALC * 6 / 8);
    rect(415 * windowWidth / 800, 150 * windowHeight / 600, 50 * windowWidth / 800, 50 * windowHeight / 600, radius / 2, radius / 2, radius / 2, radius / 2);

    //left eyeball
    rect(337 * windowWidth / 800 + eyeballx, 152 * windowHeight / 600 + eyebally, 5 * windowWidth / 800, 5 * windowHeight / 600, radius / 2, radius / 2, radius / 2, radius / 2);

    //right eyeball
    rect(417 * windowWidth / 800 + xmap, 152 * windowHeight / 600 + ymap, 5 * windowWidth / 800, 5 * windowHeight / 600, radius / 2, radius / 2, radius / 2, radius / 2);

    //mouth
    rect(windowWidth / 2 - windowWidth / 100 * 5, windowHeight / 2 + windowHeight / 100 * 10, windowWidth / 100 * 10, smallMouseY / 10, radius, radius, radius, radius);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //resize canvas function
}
