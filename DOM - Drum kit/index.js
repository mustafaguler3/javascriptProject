var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function() {

        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

//detecting keyboard press
document.addEventListener("keydown",function(event){
    
    makeSound(event.key)
    
});

function makeSound(key) {

    switch (key)  {

        case "w":
            var ton1 = new Audio("sounds/tom-1.mp3");
            ton1.play();
            break;
        case "a":
            var ton2 = new Audio("sounds/tom-2.mp3");
            ton2.play();
            break; 
        case "s":
            var ton3 = new Audio("sounds/tom-3.mp3");
            ton3.play();
            break;    
        case "d":
            var ton4 = new Audio("sounds/tom-4.mp3");
            ton4.play();
            break;   
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(key)
    }



}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)

}
