// Dom elements
const createButton = document.getElementById('load');
// state variables
let myGamePiece, yellowGamePiece, blueGamePiece;
// define myGameArea
let myGameArea = {
    canvas : document.createElement('canvas'),
    start : function() {
        this.canvas.width = 960;
        this.canvas.height = 540;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

// start game logic
function startGame() {
    myGameArea.start();
    myGamePiece = new Component(30, 30, 'red', 10, 120);
    yellowGamePiece = new Component(75, 75, 'yellow', 50, 60);
    blueGamePiece = new Component(75, 75, 'blue', 10, 110);
}


// define component that will be placed on canvas
function Component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function() {
        let ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}


function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update();
    yellowGamePiece.update();
    blueGamePiece.update();
}

// add event listener to load button
createButton.addEventListener('click', startGame);