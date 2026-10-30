const api = "https://onepieceapi.com/api/characters"


async function onePieceCharacters() {
    const response = await fetch(`${api}?limit=10`);
    const data = await response.json();
    return data;
}

async function getCharacterByUrl(characerUrl) {
    const response = await fetch(characerUrl);
    const data = await response.json();
    return data;
}

onePieceCharacters();

window.onload = async () => {
}
