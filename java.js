const api = "https://onepieceapi.com/api/characters?limit=10";


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
    
    for (const pokemonReference of kantoPokemons) {
        const pokemon = await getPokemonByUrl(pokemonReference.url);


        const characterElement = document.createElement('div');

        const characterName = document.createElement('h2');
        
        

        pokemonName.textContent = `${pokemon.id}. ${pokemon.name}`;
 
        //const pokemonImage = document.createElement('img');
        //pokemonImage.src = pokemon.sprites.front_shiny;

        //const pokemonImageBack = document.createElement('img');
    //  pokemonImageBack.src = pokemon.sprites.back_shiny;

     
                
        pokemonElement.appendChild(pokemonName);
        //pokemonElement.appendChild(pokemonImage);
        //pokemonElement.appendChild(pokemonImageBack);
        //pokemonElement.appendChild(pokemonTypes);
        mainElement.appendChild(pokemonElement);
    }
}