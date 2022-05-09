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

/*This is where the current JavaScript ends*/