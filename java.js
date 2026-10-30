const API = 'http://localhost:3000/api/onepiece/characters';


async function getOPCharacters() {
    const response = await fetch(`${API}?limit=3`);
    const data = await response.json();
    console.log(data);
    return data;
}

async function getCharacterByURL(characterURL) {
    const response = await fetch(characterURL);
    const data = await response.json();
    console.log(data);
    return data;
}

window.onload = async () => {
    const OPResponse = await getOPCharacters(); 
    const characters = OPResponse.results;
    const mainElement = document.createElement('main');
    document.body.appendChild(mainElement);
    
    for (const characterReference of characters) {
        const character = await getCharacterByURL(characterReference.url);


        const characterElement = document.createElement('div');

        const characterName = document.createElement('h2');
        character.bountie[1]

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