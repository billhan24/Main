/*This is the JavaScript file for the planning file*/
/*Bill Han, Computer Science, Year 10, Unit 2*/
/*Redirects the user back to the homepage when the logo is clicked and gives the search bar a function*/
 
/*This code sends the user back to the homepage when the yin and yang logo is clicked*/
function home() {
    window.open("HomePage.html", "_self");
 }
  
 /*This code directs the user to one of the three landing pages when a valid search is requested*/
 function search() { /*Uses the search that was submitted from the user*/
  
    if (document.getElementById("search")) {
        userInput = (document.getElementById("search").value).toLowerCase();
        /*Gets the response from the user*/
    }
   
    if (userInput == "history" ||   userInput == "History" || userInput == "ancient" || userInput == "Ancient") {
        /*Allows for several different valid answers to be typed in*/
        window.open("HistoryPage.html", "_self");
        /*Opens one of the landing pages if one of the valid responses is typed in*/
    }
  
    else if (userInput == "communication" || userInput == "Communication") {
        /*Allows for several different valid answers to be typed in*/
        window.open("CommunicationPage.html", "_self");
        /*Opens one of the landing pages if one of the valid reposnes is typed in*/
    }
  
    else if (userInput == "home" || userInput == "Home" || userInput == "homepage" || userInput == "Homepage") {
        window.open("HomePage.html", "_self");
    }
  
    else if (userInput == "Learning Process" || userInput == "Learning process" || userInput == "learning process" || userInput == "learning" || userInput == "learn" || userInput == "Learning" || userInput == "Learn") {
        /*Allows for several different valid answers to be typed in*/
        window.open("LearningProcessPage.html", "_self");
        /*Opens one of the landing pages if one of the valid reposnes is typed in*/
    }
  
    else {
        alert("Please enter a real search request");
        /*Gives the user a message if there isn't a valid requested submitted through the search bar*/
    }
   
 }
  
/*Selects all of the elements needed*/
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const counter = document.getElementById("timerNumber");
const timeGauge = document.getElementById("timing2");
const start = document.getElementById("start");
const test = document.getElementById("test");
const progress = document.getElementById("progress");
const finalScore = document.getElementById("finalScore");
  
/*Makes the questions for the user*/
let questions = [
{
    question : "What is a common form of body language?",
    imgSrc : "body-language.png",
    answerA : "Shaking hands",
    answerB : "Applause",
    answerC : "Squatting",
    correct : "A"
},
{
    question : "What hand signals are prominent in Chinese culture?",
    imgSrc : "hand-signals.png",
    answerA : "Pinching fingers",
    answerB : "Pulling fingers",
    answerC : "Pointing fingers",
    correct : "B"
},
{
    question : "What is a sign of respect in China?",
    imgSrc : "handshake-chinese.png",
    answerA : "Bowing/Nodding",
    answerB : "Patting the head",
    answerC : "Handshake",
    correct : "C"
},
{
    question : "What is the work lifestyle like in China?",
    imgSrc : "working-lifestyle.png",
    answerA : "Busy",
    answerB : "Laid back",
    answerC : "Lively",
    correct : "C"
}
];
  
/*Makes the variables that allow the timer to count down*/

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
/*Makes the timer be 15 seconds for each question*/
const questionTime = 15;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
  
/*Analyzes the input*/
function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
}

/*Starts the quiz when the user clicks to start*/
start.addEventListener("click",startTest);
  
/*Starts the quiz on the click and displays the questions*/
function startTest(){
    start.style.display = "none";
    renderQuestion();
    test.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
}
  
/*Shows the progress to the user in real time*/
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
  
/*Counts the render*/
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++}
    else{
        count = 0;
        /*Changes the colour when the question is not answered in time*/
        answerIsWrong();
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();}
    else{
        /*Shows the results page when the questions are done*/
        clearInterval(TIMER);
        scoreRender();
        }
    }
}
  
/*Analyses the correct answer*/
  
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        /*If the answer is correct*/
        score++;
        /*The dot changes to the colour green*/
        answerIsCorrect();}
    else{
        /*If the answer is not correct*/
        /*The dot chanes to red*/
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        /*Shows the final ending screen when all the questions are done*/
        clearInterval(TIMER);
        scoreRender();
    }
 }
  
/*Controls the colour if the answer is correct*/
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}
  
/*Controls the colour if the answer is wrong*/
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#97251c";
}
  
/*Shows the score when all the questions are done*/
function scoreRender(){
    finalScore.style.display = "block";
   
    /*Uses a calculation to calculate the percentage score*/
    const scorePerCent = Math.round(100 * score/questions.length);
   
    /*Displays and image depending on the percentage score*/
    let img = (scorePerCent >= 100) ? "great-job.jpg" :
              (scorePerCent >= 75) ? "good-job.jpg" :
              (scorePerCent >= 50) ? "okay-job.jpg" :
              (scorePerCent >= 25) ? "bad-job.jpg" :
              "bad-job.jpg";
   
    finalScore.innerHTML = "<img src="+ img +">";
    finalScore.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

/*This is where the current JavaScript ends*/