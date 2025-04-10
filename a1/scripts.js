console.log("Hello world!")

// image movement functions
// image id is section-1-image
let imageElement = $("#section-1-img")

$("document").ready(function () {

    $("#up-btn").click(imgUp)
    $("#down-btn").click(imgDown)
    $("#left-btn").click(imgLeft)
    $("#right-btn").click(imgRight)

    $("#reset-btn").click(function () {
        console.log("resetting image"),
        imageElement.removeClass()
    });

    // s2
    $("#option1").click(option1Click)
    $("#option2").click(option2Click)
    $("#option3").click(option2Click)
    $("#option4").click(option2Click)

    // s3
    $("#scroll-activated-image").scroll(scrollImgEffect);
});

//offset() can be used to move instead of animations
function imgUp(){
    // imageElement
    console.log("image up")
    imageElement.removeClass()
    imageElement.addClass("animate__animated animate__backOutUp animate__slow");
}
function imgDown(){
    console.log("image down")
    imageElement.removeClass()
    imageElement.addClass("animate__animated animate__backOutDown animate__slow");
}
function imgLeft(){
    console.log("image left")
    imageElement.removeClass()
    imageElement.addClass("animate__animated animate__backOutLeft animate__slow");

}
function imgRight(){
    console.log("image right")
    imageElement.removeClass()
    imageElement.addClass("animate__animated animate__backOutRight animate__slow");

}

// trivia
    

let rightAnswers = 0;
let questionArray = [
    [   
        "How many laptops do i own",
        "How do i get home from school?",
        "What podcast do i listen to most frequently",
        "What kind of car do i own",
        "Click option 1 ",
        "Thats all, folks"
    ],
    [
        "8",
        "Walk downtown, take the bus.",
        "Well there's your problem",
        "2006 Toyota Yaris 3dr Hatchback",
        "Option 1",
        "You won!"
    ],
    [
        "4",
        "Get a ride from thomas",
        "Meidas touch",
        "2001 Buick LeSabre Limited",
        "Option 2",
        "Click to restart"
    ],
    [
        "6",
        "take an uber",
        "Destination Linux",
        "2008 Schwinn ecoTour",
        "no",
        "Click to restart"
    ],
    [
        "20",
        "walk",
        "the joe rogan experience",
        "2008 BMW x5 (e70) 3.0si xDrive",
        "no",
        "Click to restart"
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
    // This is annoying af lol
    $("#section-3-image").addClass("animate__animated animate__bounce animate__fast");
    $("#section-3-image").on('animationend', function () {
        $("#section-3-image").removeClass();
    })
}