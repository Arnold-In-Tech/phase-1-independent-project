# Phase-1-independent-project

BugScout is a pocket friendly tool that helps farmers identify disease symptoms early in the growing season.
The appllication allows users to compare healthy and diseased plants, as well as obtain more information regarding the disease and its treatment regimen.

[![Static Badge](https://img.shields.io/badge/Licence-MIT-maroon?style=for-the-badge)](./LICENSE)
![Static Badge](https://img.shields.io/badge/JS-JavaScript-yellow?style=for-the-badge&logo=javascript)
![Static Badge](https://img.shields.io/badge/HTML-HTML_5-red?style=for-the-badge&logo=html5)
![Static Badge](https://img.shields.io/badge/CSS-CSS_3-blue?style=for-the-badge&logo=css3)

# Demo of the webpage
### Landing page
![Landing-page](./images/landing.png?raw=true)

### Home

### Documentation
![Documentation-page](./images/documentation.png?raw=true)
### About Us
![About-us-page](./images/aboutUs.png?raw=true)
### Sign Up
![SignUp-page](./images/signup.png?raw=true)
### Login
![Login-page](./images/login.png?raw=true)
# Project Requirements/Deliverables
Single Page Application (SPA):

1. Your app must be a HTML/CSS/JS/Bootstrap or Tailwind frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

2. Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

3. Your app needs to incorporate at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).

4. Some interactivity is required. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.

5. Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.


# Set-up and Installation
Dowload the directory:
```bash
git clone git@github.com:Arnold-In-Tech/phase-1-independent-project.git
```

Change directory into this folder to access the program files:
```bash
cd ./phase-1-independent-project.git
```


# Executing the project
The app fetches data from a local server running JSON DB server. 
Run the following command to get the backend started:
```bash
json-server --watch plantsAndDiseasesDb.json
```

Test your server by visiting these routes in the browser:
```bash
http://localhost:3000/plants
http://localhost:3000/diseases
```

Open the "index.html" file on google-chrome:
```bash
google-chrome index.html
```


# Author
Arnold .A.


# Licence
All assets and code are under the [MIT](https://choosealicense.com/licenses/mit/) LICENSE and in the public domain unless specified otherwise.

