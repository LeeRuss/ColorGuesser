var colors = [];
var colorToGuess;

var bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;
console.log(bodyBackgroundColor);
var boxes = document.getElementsByClassName("box");
var displayColor = document.getElementById("display-color");
var newColorButton = document.getElementById("new-color");
var message = document.getElementById("message");



initGame();


function initGame(){
    newColorButton.addEventListener("click", setGame);
    setupBoxes();
    setGame();
}

function setupBoxes(){
    for(var i=0; i<boxes.length; ++i){
        boxes[i].addEventListener("click", function() {
            var boxColor = this.style.backgroundColor;
            if(boxColor == colorToGuess){
                message.textContent = "You won!";
                for(var i=0; i<boxes.length; ++i){
                    boxes[i].style.backgroundColor = boxColor;
                }
            }else{
                message.textContent = "Wrong!";
                this.style.backgroundColor = bodyBackgroundColor;
            }
        });
    }
}

function setGame(){
    setColors();
    chooseColor();
    displayColor.textContent = colorToGuess;
    message.textContent = "";

}



function setColors(){
    for(var i=0; i<boxes.length; ++i){
        boxes[i].style.backgroundColor = generateColor();
    }
    chooseColor();
}

function generateColor(){
    return "rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
}

function chooseColor(){
    colorToGuess = boxes[Math.floor(Math.random()*6)].style.backgroundColor;
}
