// play sound in website


// add eventlistener to each drum - when clicked display alert
// detecting button press
var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);

    function handleclick() {
        // check the innerHTML of the button pressed
        var buttoninnerHTML = this.innerHTML; 

        // send the button to the makeSound() method, to play the relavent sound
        makeSound(buttoninnerHTML); 

        buttonAnimation(buttoninnerHTML);
}


// detecting keyboard press
document.addEventListener("keydown", function(event) {

    // function gets called passing in the event that triggered the keypress.
    // that event contains a property called, key, which tells us which keyboard key was pressed.
    // then send that over to the function makeSOund() in order to make the sound want
    makeSound(event.key); 

    buttonAnimation(event.key);
    
});


function makeSound(key) {
        switch (key) {
            case "d": 
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
        
            case "k":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
        
            case "l":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
        
            case "s":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
        
            case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
        
            case "a":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;

            default: console.log(buttoninnerHTML);
        }
    }
}



// button animation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}







