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


/*The slide index variable*/
let slideIndex = 1;
showSlides(slideIndex);

/*Controls how to go to the next slide*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*Controls the thumbnail images*/
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*Functionality for the slideshow*/
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  /*Retrieves the information from the user input*/
  let dots = document.getElementsByClassName("dot");
  /*This is if the dots at the bottom are clicked instead of the arrows*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  /*Analyses the user input*/
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  /*Gives a function, either going to the previous slide or next slide*/
  slides[slideIndex-1].style.display = "block";
  /*Shows the content once the function is done*/
  dots[slideIndex-1].className += " active";
}


/*Information for the modal*/
var modal = document.getElementById('myModal1');

/*Retrieves the source of images and puts them in the content*/
var img = document.getElementById('myImage1');
var modalImage = document.getElementById("img01");
var captionText = document.getElementById("caption1");
/*Displays the content when the button is clicked*/
img.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
  modalImage.alt = this.alt;
  captionText.innerHTML = this.alt;
}

/*Closes the modal button when the close button is clicked*/
var span = document.getElementsByClassName("close-button1")[0];

/*Hides the modal content when it is clicked on*/
span.onclick = function() {
  modal.style.display = "none";
}

console.log("test");


/*Same exact code as the section above, but with different variable names*/
var modal = document.getElementById('myModal2');

var img = document.getElementById('myImage2');
var modalImage = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
  modalImage.alt = this.alt;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close-button2")[0];

span.onclick = function() {
  modal.style.display = "none";
}

console.log("test");


/*Same code as the sections above, but with different variable names*/
var modal = document.getElementById('myModal3');

var img = document.getElementById('myImage3');
var modalImage = document.getElementById("img03");
var captionText = document.getElementById("caption3");
img.onclick = function(){
  modal.style.display = "block";
  modalImage.src = this.src;
  modalImage.alt = this.alt;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close-button3")[0];

span.onclick = function() {
  modal.style.display = "none";
}

console.log("test");

/*This is where the current JavaScript ends*/