const poke_container = document.getElementById('poke-container')

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
pokemon_count = 60
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await testPokemon(i)
    }
}

fetchPokemons()

async function testPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()

    var name = "", spriteLink = "", type = ""

    if (res.ok) {
        // console.log(data) 
        name = data.species.name.toString() //get name of pokemon
        spriteLink = data.sprites.front_default.toString() //get sprite link of pokemon
        type = data.types[0].type.name.toString() // get type of pokemon
    }
    //get name of pokemon  === data.species.name 
    //get sprite link of pokemon === data.sprites.front_default 
    // get type of pokemon === data.types[0].type.name  (some actually have 2 types. only get one)
    
    makePokemon(name, spriteLink, type, id) //all 3 parameter here are still promise object. dunno how to makethem into string but this will do 
}

function makePokemon(name, spriteLink, type, id){
    name = name[0].toUpperCase() + name.slice(1)
    id = id.toString().padStart(3, '0')


    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="${spriteLink}" alt="empty">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML
    
    pokemonEl.style.backgroundColor = colors[type]

    poke_container.appendChild(pokemonEl)
}

// testPokemon(1)