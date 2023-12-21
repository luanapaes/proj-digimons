// 1. chamar a api de Digimons
const urlApi = "https://digitalinnovationone.github.io/api-digimon/api/digimon.json";

async function getDigimonsAPI(){
    const response = await fetch(urlApi);

    return await response.json();
}

// 2. filtro/busca dos digimons
async function filtroDigimons(digimonList, digimonId) {

    const digimon = await digimonList.find((monster) => 
        monster.id === digimonId);

        let digimonAleatorio = Math.random().toFixed(1) * 10;
        console.log(digimonAleatorio);

    return digimon;
}

// 3. renderizador 
async function renderDigimons(digimon) {
    const imgDigimonElement = document.getElementById('img__digimon');
    const titleDigimon = document.getElementById('t-name__digimon');
    const hp = document.getElementById('hp-ext')
    const atk = document.getElementById('atk-ext');
    const def = document.getElementById('def-ext')


    imgDigimonElement.src = digimon.image;
    titleDigimon.textContent = digimon.name;
    atk.style.width = digimon.ATK + "%";
    hp.style.width = digimon.HP + "%";
    def.style.width = digimon.DEF + "%";

}

// 4. main
async function main() {
    const digimons = await getDigimonsAPI();



    const chooseDigimons = await filtroDigimons(digimons, 4);
    

    renderDigimons(chooseDigimons)
}

main();