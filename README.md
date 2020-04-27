# Friend-finder
This is an Express app to find friends, or even someone special you need in your life. Quick and easy, just fill out this survey and our matching algorithm will pair you with someone that has the closests answers to you!

## Link to deployed Github: https://github.com/skip1113/friend-finder
## Link to deployed app on Heroku:

### Instructions
Click the link deployed to Heroku and find the survey button, take the survey and start matching!
### To Run Locally
* Clone this repository from Github
* Find this file in your favorite code software
* npm install
* Set your port
* Run node server.js in your terminal 
* Open your browser and search "http:/localhost:"PORT#"/

### Organization:
* Home/Survey.Html files
    * Home page with a link to take you to the survey
    * Survey page with a form of questions 
        * After your questions a modal will show you your match.
* Api/Html Routes JS
    * Routes to get to your friends objects, and to both your home and survey pages.
* Friends.js file
    * File to hold your objects made with questions to match with.
* Server.js file
    * Connects and listens to localhost
    * Server to require all of the packages, and other files

## Technologies used:
* Javascript
* Jquery
* HTML
* Node.js
* Node packages
    * Express
    * Path