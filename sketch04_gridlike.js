//this interaction needs to improve with importing symbols
//here spacing acts as a function of size too
//also interaction doesnt need random picking anymore
//this sketch is upgraded with a new approach

//let symbolradiusx, symbolradiusy = 50;

function preload() {
    symbol = loadImage('symbol/symbol.svg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    //let symbolradiusx, symbolradiusy = 5;
    frameRate(10);
    //symboldraw();
}

function draw() {
    background(255,100);
    symboldraw();
    print (mouseY);

}

function symboldraw() {
    // for (var i = 0; i <= height; i += 60) {
    //     let c = image(symbol, width / 2, i, i* .5,i* .5); //i/2, i/2
    // }
    // symbol.resize (50,50);
    // image(symbol, width/2, height/2, 50,50);
    
    // for (var i = 0; i <= width; i += 40) {
    //     for (var j = 0; j <= height; j += 40) {
    //         image(symbol, i, j, symbolradiusx, symbolradiusx);
    //     }
    // }
    // symbolradiusx = mouseY + 20;
    // symbolradiusy = mouseY + 20;

    //fill(color (random(1,102), random(0,100), random(0,120), 100));
    for (var j = 0; j <= width; j += 45) {
        for (var i = 1; i <= height; i += 45) {
            //image (symbol, xpos, ypos, width, height)
            //image(symbol, j, i, i / 18, i / 18);
            //image(symbol, j, random(i), i/18, i/18);
            image(symbol, j, random (height/50, i), 28, 28);
            //image(symbol, j, i, (i / random (height/2)), (i / random(height/2)) );
            //image(symbol, j, i, (i / 18) % mouseY, (i / 18) % mouseY );
        }
        // if (mouseY < 0) {
        //     background = 125;
        // }
        i++;
    }
    // if (frameCount % 15 == 0) {
    //     background(255);
    //     symbol = loadImage('symbol/symbol.svg');
    // } else {
    //     background(0);
    //     symbol = loadImage('symbol/symbolwhite.svg');
    // }
}


function keyTyped() {
    // Pressing the "q" key to
    // save the image
    if (key === 'q') {
        saveCanvas('myCanvas', 'png');
        //saveImage('myCanvas', 'png');
    }
}