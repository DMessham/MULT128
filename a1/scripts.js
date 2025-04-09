console.log("Hello world!")

// image movement functions
// image id is section-1-image
let imageElement = $("#section-1-image")

$("document").ready(function () {
    let upButton = $("up-btn");
    let downButton = $("down-btn");
    let leftButton = $("left-btn");
    let rightButton = $("right-btn");

    upButton.on('click', imgUp())
    downButton.on('click', imgDown())
    leftButton.on('click', imgLeft())
    rightButton.on('click', imgRight())

    $("reset-btn").on('click', 
        imageElement.removeClass()
    );
});

//offset() can be used to move instead of animations
function imgUp(){
    // imageElement
    console.log("image up")
    imageElement.animate()
}
function imgDown(){
    console.log("image down")
}
function imgLeft(){
    console.log("image left")

}
function imgRight(){
    console.log("image right")

}

