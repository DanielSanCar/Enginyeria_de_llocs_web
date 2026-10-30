const ONEPIECE_BASE_URL = 'http://localhost:3000/api/onepiece/characters';


 function getOPCharacters() {
    const response =  fetch(`${ONEPIECE_BASE_URL}?limit=10`);
    const data =  response.json();
    console.log(data);
    return data;
}

 function getCharacterByURL(characterURL) {
    const response =  fetch(characterURL);
    const data =  response.json();
    console.log(data);
    return data;
}

window.onload =  () => {
    const OPResponse  =  getOPCharacters(); 
    const characters = OPResponse.results;
    const mainElement = document.createElement('main');

    document.body.appendChild(mainElement);
    
    for (const characterReference of characters) {
        const character =  getCharacterByURL(characterReference.id);

        const characterElement = document.createElement('div');

        const characterName = document.createElement('h2');
        //character.bountie[1]

        characterName.textContent = `${character.id}. ${character.name[1]}`;
 
        const characterImage = document.createElement('img');
        characterImage.src = character.image_url;
                
        characterElement.appendChild(characterName);
        characterElement.appendChild(characterImage);
        characterImage.appendChild
        //pokemonElement.appendChild(pokemonTypes);
        mainElement.appendChild(characterElement);
    }
}