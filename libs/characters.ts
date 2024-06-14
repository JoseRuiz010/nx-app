export async function getAllCharacters() {
    const data = await fetch(`https://rickandmortyapi.com/api/character`)
    .then(res=> res.json())
    console.log(data)
    return data;
  }