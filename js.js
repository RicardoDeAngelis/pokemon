// crear la funcion asincrona para pedir los datos a la api de pokemon
async function getpokemon(id){
    const respose = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await respose.json();
    return data;
}


async function init(){
const pokemon = await getpokemon(150);
updatePokemon(pokemon);
// console.log( await getpokemon(150));
}

// llamamos a la funcion init que trae getpokemon
init();

function updatePokemon(pokemon){

    // en esta linea llamamos windows y usamos el id de h1 para cambiar por el nombre de pokemon
window.namePoke.textContent = pokemon.name;
// para mostrar una imagen usando el id usamos
window.imgPoke.setAttribute('src',pokemon.sprites.front_default);


}
window.search.addEventListener('change', async()=>{
   const pokemon = await getpokemon(window.search.value);
   updatePokemon(pokemon);

})