// Creating a heading h1 element and setting the attribute 
// Appending heading to the body.

const heading= document.createElement("h1");
heading.setAttribute("id","content");
heading.innerText= "💥👑BreakingBAD👑💥"
document.body.append(heading)

// breakingAPI() create the character data and print the data to the screen .
// create a div element and set attribute of class to that element.
// Appending the div to the body 
function breakingBadAPI({name,image,portrayed,status}){
  const container= document.createElement("div");
  container.setAttribute("class","container")

  container.innerHTML = `<h2>${name}</h2>
  <img src="${image}" alt=displayimages>
  <p><span>Portrayed by:</span>${portrayed}</p>
  <p><span>Current Status:</span>${status}</p>`;

document.body.append(container);
}



// fetch API and use the then chaining method for further data access.
// Looping through each variable to print the required data from the API to the screen  
fetch("https://www.breakingbadapi.com/api/characters")

.then((data) => data.json())
.then((characters) => { 
    characters.forEach((users) =>{
  const Users = {
      name:users.name, image:users.img,
      portrayed:users.portrayed,
      status:users.status
  }
  
  breakingBadAPI(Users);
  
})
})


