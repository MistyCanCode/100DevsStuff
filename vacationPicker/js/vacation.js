import {config} from './config.js'
const KEY = config.API_KEY;

document.querySelector('#earth').addEventListener('click', getVacation)
document.querySelector('#air').addEventListener('click', getVacation)
document.querySelector('#fire').addEventListener('click', getVacation)
document.querySelector('#water').addEventListener('click', getVacation)


//const category = document.querySelector('button').

function getVacation(event){

    const category = event.target.value
    console.log(category)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com',
            'X-RapidAPI-Key': `${KEY}`
        }
    };

    fetch(`https://webcamstravel.p.rapidapi.com/webcams/list/category=${category}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}