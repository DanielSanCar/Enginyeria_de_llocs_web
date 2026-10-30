
const ONEPIECE_BASE_URL = 'http://localhost:3000/api/onepiece/characters';

async function getAllCharacters()
{
    const response = await fetch(`${ONEPIECE_BASE_URL}?limit=10`);
    const data = await response.json();
    console.log(data);
    return data;
}
window.onload = async () => {
    const characterRespone = await getAllCharacters();
    const mainElement = document.createElement('main');
    document.body.appendChild(mainElement);

     const characterElement = document.createElement('div');
    const characterName = document.createElement('h2');
}