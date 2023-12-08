const select = document.querySelector('.breed-select');
const error = document.querySelector('.error');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info')
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY = 'live_doTbMTwObRXtXZUCULbmGq4E1tkllVbR0BUk2pZfxhZyz7qz8tRCunpfCyR7ZfSH'
function getCats (){
    return fetch(`${BASE_URL}?api_key=${API_KEY}`)
    .then(response => {
        if(!response.ok){
            throw new Error;
        }
        return response.json();
    })
}

getCats().then(data=> {
    select.innerHTML = createInitialMarkup(data);
    select.hidden = false;
    loader.hidden = true;
}).catch(err => {
    error.hidden = false;
    loader.hidden = true;
});

function createInitialMarkup (arr){
    return arr.map(({name, id}) => {
        return `<option value="${id}">${name}</option>`
    }).join('')
};

select.addEventListener('change', onSelect);
function onSelect(e){
    loader.hidden = false;
    getCats().then(data=> {
        catInfo.innerHTML = createCatGrid(data, e.target.value);
        loader.hidden = true;
    }).catch(err => {
        error.hidden = false;
        select.hidden = false;
    });
};

function createCatGrid (arr, inputId){
    const chosenCat = arr.find(cat => inputId === cat.id);
    const {id, name, temperament, description, image:{url}} = chosenCat;
    return `<img src="${url}" alt="${name}" width="300px">
    <h2>${name}</h2>
    <p>${description}</p>
    <h3>Temperament</h3>
    <p>${temperament}</p>`
}