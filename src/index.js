// phase-1-independent-project: BugScout 
// Author: Arnold .A.
// Date: 18/01/2024



document.addEventListener('DOMContentLoaded', init);

function init() {

    // ================================================================== //
    // Loads with DOMContentLoaded. Fetches data from PlantsDB & DiseasesDb 
    // json-server and avails it as a JavaScript object. Contains 
    // functions that manipulate the DOM based on the fetched data.
    // ================================================================== //

	// fetch('http://localhost:3000/plants')
	// .then((response) => {
	// 	return response.json();
	// })
	// .then((plantsData) => {
	// 	plantsMenu(plantsData);
	// })
	// .catch((err) => {
	// 	console.warn('Something went wrong.', err);
	// })


	const request1 = fetch('http://localhost:3000/plants').then(response => response.json());
	const request2 = fetch('http://localhost:8000/diseases').then(response => response.json());
	Promise.all([request1, request2])
	.then(([data1, data2]) => {
    //console.log(data1, data2);
	const plantsData = data1;
	const diseasesData = data2;

	plantsMenu(plantsData);
	displayFirstPlantDetails(plantsData, diseasesData)
	})
	.catch(error => {
    console.error(error);
	});

}



function plantsMenu(plantsData){

    // ================================================================== //
    // Display a menu of all plants on the left side of the page
    // ================================================================== //

    plantsData.forEach(plant => {
    
    /* Create a buttton to display plant name */
    let plantName = document.createElement('button');
    plantName.textContent = `${plant.common_name}`;
    plantName.className = 'menuBtn';
    plantName.id = `${plant.common_name}`;
    document.querySelector('.plantsMenu').appendChild(plantName);

    })
}


function displayFirstPlantDetails(plantsData, diseasesData){

    // ================================================================== //   
    // Shows first plant's details when the page loads
    // ================================================================== //   

	// Display fisrt plant on the landing page
    let healthyDisplayTag = document.querySelector(".healthyDisplay")
    healthyDisplayTag.appendChild(healthyPlantCard(plantsData[0]));

	// // Display first pathogen on the landing page
	// let diseasedDisplayTag = document.querySelector(".diseasedDisplay")
    // diseasedDisplayTag.appendChild(diseasedPlantCard(plantsData[0]));


	// Get the container element
    let btnContainer = document.querySelector(".plantsMenu");

    // Get all buttons with class="btn" inside the container
    let btns = btnContainer.getElementsByClassName("menuBtn");

    // Display healthy plant details when menu button is clicked
    let count=0;
    for (let counter = 0; counter < btns.length; counter++){
        btns[counter].addEventListener("click", 
        function(){
            let displayTag = document.querySelector(".healthyDisplay")

            if (displayTag.hasChildNodes()) {
                // remove childnodes if it has at least one
                displayTag.replaceChildren()
                // before appending the clicked movie details
                displayTag.appendChild(healthyPlantCard(plantsData[counter]));
                // Add diseased information on the midRight side of the webpage
                identifyDiseased(plantsData[counter], diseasesData);
				// diseasedPlantCard(plantsData[counter]);
                // Add all host pathogens information on the Right side of the webpage
                // hostPathogensCard(plantsData[counter]);
            }
        })
        count++;
    }
}


function identifyDiseased(plantsObj, diseasesData){

	// Check if plant object common name is in any of diseases data

	let plantName = plantsObj.common_name;
	let diseases = [];
	let diseaseID = [];
	for (let i=0; i<diseasesData.length; i++){
		if (diseasesData[i].host.includes(plantName)){  // if the disease hosts include the plant name
			diseases.push(diseasesData[i].common_name); // add the disease name to the array of diseases
			diseaseID.push(diseasesData[i].id);
		};
	}


	// Show disease card of the last disease on disease list
    
	let articleContainer = document.querySelector(".diseasedDisplay");
	
	if (articleContainer.hasChildNodes()) {
		// remove childnodes if it has at least one
		articleContainer.replaceChildren()
		// before appending the clicked movie details

		currentDiseases = parseInt(diseaseID.slice(-1));
		diseasesData.forEach(item => {
			if (item.id === currentDiseases){
				articleContainer.appendChild(diseasedPlantCard(item));
			}
		}) 

		// Show all diseases identified on the right side of the webpage
		// Create a list element
		let diseaseContainer = document.querySelector(".diseaseMenu");
		
		diseases.forEach(item => {
			let br = document.createElement("br")
			let li = document.createElement("li")
			li.textContent = item;	
			li.style = "font-size: 18px; color: purple"
			diseaseContainer.appendChild(br);
			diseaseContainer.appendChild(li);
		})
	}
}


function healthyPlantCard(plantObj){

    // ================================================================== //   
    // Generates a plant card
    // ================================================================== //   

    let plantDetails = document.createElement('article');
    plantDetails.className = "card";

    plantDetails.innerHTML = `
    <header class="cardHeader">
		<img class="plantImg" src="${plantObj.default_image["medium_url"]}" width=100%>
        <h2 class="plantTitle">${plantObj.common_name}</h2>
		<h3 class="plantTitle"><i>${plantObj.scientific_name[0]}</i></h3>
        <span class="plantId">plant ID: ${plantObj.id}</span>
    </header>
    `
    return plantDetails;
}


function diseasedPlantCard(plantObj){

    // ================================================================== //   
    // Generates a diseased plant card
    // ================================================================== //   

    let plantDetails = document.createElement('article');
    plantDetails.className = "card";

    plantDetails.innerHTML = `
    <header class="cardHeader">
		<img class="plantImg" src="${plantObj.images[0]["medium_url"]}" width=100%>
        <h2 class="plantTitle">${plantObj.common_name}</h2>
		<h3 class="plantTitle"><i>${plantObj.scientific_name}</i></h3>
        <span class="plantId">plant ID: ${plantObj.id}</span>
    </header>
    <div class="cardBody">
		<p class="host" style="font-size: 14px; font-weight: 600;">Host(s):<br></p>
		<p class="subtitle" style="font-size: 10px; font-weight: 500;"> ${plantObj.host}<br></p>
        <p class="description" style="font-size: 14px; font-weight: 600;">Description:<br></p>
        <p class="subtitle" style="font-size: 10px; font-weight: 500;"> ${plantObj.description[0].subtitle}<br></p>
        <p class="details" style="font-size: 10px; font-weight: 500;">${plantObj.description[0]["description"]}</p>
        <p class="description" style="font-size: 14px; font-weight: 600;">Solution:<br></p>
		<p class="subtitle" style="font-size: 10px; font-weight: 500;"> ${plantObj.solution[0]["subtitle"]}<br></p>
        <p class="details" style="font-size: 10px; font-weight: 500;">${plantObj.solution[0]["description"]}</p>        
    </div>
    `
    return plantDetails;
}
