const api = " https://bn9ct5dd-3000.uks1.devtunnels.ms";


async function getOPCharacters() {
    const response = await fetch(`${api}`);
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
    const OPResponse = await getOPCharacters(); //1
    const characters = OPResponse.results;
    const mainElement = document.createElement('main');
    document.body.appendChild(mainElement);
    
    for (const characterReference of characters) {
        const character = await getCharacterByURL(characterReference.url);


        const characterElement = document.createElement('div');

        const characterName = document.createElement('h2');
        
        const characterBountie = document.createElement('h2');        

        characterName.textContent = `${character.id}. ${character.name[1]}`;
 
        const characterImage = document.createElement('img');
        characterImage.src = character.image_url;


     
                
        characterElement.appendChild(characterName);
        characterElement.appendChild(characterImage);
        //pokemonElement.appendChild(pokemonTypes);
        mainElement.appendChild(characterElement);
    }
}