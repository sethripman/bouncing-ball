const createButton = document.getElementById('load');

let myGameArea = {
    canvas : document.createElement('canvas'),
    start : function() {
        this.canvas.width = 960;
        this.canvas.height = 540;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
};

function startGame() {
    myGameArea.start();
}

createButton.addEventListener('click', startGame);