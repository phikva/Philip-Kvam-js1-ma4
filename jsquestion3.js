const gameDetailsUrl = "https://api.rawg.io/api/games/4200";

fetch(gameDetailsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        
        createGameDetails(json);
    })
    .catch(function(error) {
        console.log(error);
    });

   
    function createGameDetails(json) {
        console.dir(json);
        console.log(json.background_image);
        
    

    const image = document.querySelector(".image");
    image.src = json.background_image;
    
    
    const name = document.querySelector("h1");
    name.innerHTML= json.name;

    const description = document.querySelector(".description");
    description.innerHTML = json.description;
    
    
    }
    