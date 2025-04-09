console.log("Hello world!")

// image movement functions
// image id is section-1-image
let imageElement = $("#section-1-image")

$("document").ready(function () {
    let upButton = $("up-btn");
    let downButton = $("down-btn");
    let leftButton = $("left-btn");
    let rightButton = $("right-btn");

    upButton.click(imgUp)
    downButton.click(imgDown)
    leftButton.click(imgLeft)
    rightButton.click(imgRight)

    $("reset-btn").click(function () {
        console.log("resetting image"),
        imageElement.removeClass()
    });
    $("#option1").click(option1Click)
    $("#option2").click(option2Click)
    $("#option3").click(option2Click)
    $("#option4").click(option2Click)
});

//offset() can be used to move instead of animations
function imgUp(){
    // imageElement
    console.log("image up")
    // imageElement.animate()
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

// trivia
    

let rightAnswers = 0;
let questionArray = [
    [   
        "Click option 1 5 times",
        "Click option 1 4 times",
        "Click option 1 3 times",
        "Click option 1 2 times",
        "Click option 1 ",
        "YOU WIN"
    ],
    [
        "q1-a1",
        "q2-a1",
        "a3-a1",
        "q4-a1",
        "q5-a1",
        "Reload Page to try again"
    ],
    [
        "q1-a2",
        "q2-a2",
        "a3-a2",
        "q4-a2",
        "q5-a2",
        "Reload Page to try again"
    ],
    [
        "q1-a3",
        "q2-a3",
        "a3-a3",
        "q4-a3",
        "q5-a3",
        "Reload Page to try again"
    ],
    [
        "q1-a4",
        "q2-a4",
        "a3-a4",
        "q4-a4",
        "q5-a4",
        "Reload Page to try again"
    ],

]

function option1Click(){
    console.log("right Answer clicked")
    updateMessage("correct!")
    rightAnswers++;
    // $("#question-msg").text(questionArray[0][rightAnswers])
    newQuestion()
}
function option2Click(){
    console.log("wrong answer clicked")
    updateMessage("Wrong!!")
    rightAnswers = 0
    newQuestion()
}

function newQuestion(){
    $("#question-msg").text(questionArray[0][rightAnswers])
    $("#option1").text(questionArray[1][rightAnswers])
    $("#option2").text(questionArray[2][rightAnswers])
    $("#option3").text(questionArray[3][rightAnswers])
    $("#option4").text(questionArray[4][rightAnswers])
}

function updateMessage(message){
    //find reult message and update inner text
    $("#result-msg").text(message)
}

// scroll image events

// fade in on scroll

function scrollImgEffect(){
    console.log("image scroll event");
    $("#section-3-image").addClass("animate__animate animate__jello");
}