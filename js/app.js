import * as cars from './car.js'
import * as ui from './ui.js'


export let init = () => {
    ui.displayCarsList(cars.cars)
    let search_bar = document.querySelector('#product-search')
    search_bar.addEventListener('keyup', (e) => {
       if(e.key === 'Enter') {
           ui.displayCarsList(search_bar.value.trim() !== "" ? cars.search(search_bar.value) : cars.cars)
       }
    })

}