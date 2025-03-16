var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++)  {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    //the function with out name is called anomaus function "what to do click detected".
  });


}
