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

/*Modal button functions*/
modalButton1 = document.getElementById("modal-button1")
/*Gets the element that matches with the selector*/
modal1 = document.querySelector(".modal-image1")
/*Close button functions when the selector matches with the input*/
closeButton1 = document.querySelector(".close-button1")
/*The text and background dissapears when the close button is clicked*/
closeButton1.setAttribute("onclick","hideWindow1()");
/*Close button function*/
function hideWindow1()
{
    modal1.style.display = "none"
}
/*Shows all of the text and backgrounds when the image is clicked on*/
modalButton1.onclick = function()
{
    modal1.style.display = "block"
}
/*Controls when the content appears based on location of the onclick*/
window.onclick = function(e)
{
    if(e.target == modal)
        modal1.style.display = "none"
}

/*This is the same code as above except with the variable names changed*/
modalButton2 = document.getElementById("modal-button2")
modal2 = document.querySelector(".modal-image2")
closeButton2 = document.querySelector(".close-button2")
closeButton2.setAttribute("onclick","hideWindow2()");
function hideWindow2()
{
    modal2.style.display = "none"
}
modalButton2.onclick = function()
{
    modal2.style.display = "block"
}
window.onclick = function(e)
{
    if(e.target == modal)
        modal2.style.display = "none"
}

/*This is the same code as above except with the variable names changed*/
modalButton3 = document.getElementById("modal-button3")
modal3 = document.querySelector(".modal-image3")
closeButton3 = document.querySelector(".close-button3")
closeButton3.setAttribute("onclick","hideWindow3()");
function hideWindow3()
{
    modal3.style.display = "none"
}
modalButton3.onclick = function()
{
    modal3.style.display = "block"
}
window.onclick = function(e)
{
    if(e.target == modal)
        modal3.style.display = "none"
}

/*This is where the current JavaScript ends*/