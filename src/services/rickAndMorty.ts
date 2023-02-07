export const rickAndMortyCharacter = 'https://pokeapi.co/api/v2/pokemon?limit=151'
export const rickAndMortyLocalizations = 'https://pokeapi.co/api/v2/pokemon?limit=151'
export const rickAndMortyEpisodes = 'https://pokeapi.co/api/v2/pokemon?limit=151'

export const fetchRickAndMorty = async (url:string) => {
    return fetch(url).then(res=> res.json())
}
