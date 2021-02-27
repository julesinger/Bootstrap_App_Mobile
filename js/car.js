export let cars = []

/**
 * 
 * @param {String} _mod 
 * @param {String} _desc
 * @param {Array} _prices 
 * @param {String} _url 
 * @param {Int} _cv 
 * @param {Int} _nbPlaces 
 * @param {Int} _year 
 * @param {String} _transmission 
 */
const Car = function(_id, _mod, _desc, _prices, _url, _cv, _nbPlaces, _year, _transmission) {
    this.id = _id;
    this.mod = _mod;
    this.desc = _desc;
    this.prices = _prices;
    this.url = _url;
    this.cv = _cv;
    this.nbPlaces = _nbPlaces;
    this.year= _year;
    this.transmission = _transmission;
}

/**
 * get car(s) that match with the current keyword
 * @param { String } keywords 
 */
export let search = function(keywords) {
    return cars.filter(car => car.mod.toLowerCase().includes(keywords.toLowerCase()))
}

let car1 = new Car(1, 'C63s aMG', "LE PLUS PUISSANT DE SA CATÉGORIE. Un V8 biturbo assemblé main de 503 ch libère un torrent de couple de 516 lb-pi. Un nouveau style agressif est associé à de nouvelles technologies de pointe.", [400, 600, 1200], 'c63s.png', 510, 5, 2018, 'Auto')
let car2 = new Car(2, 'Lamborghini Aventador', "L’Aventador a été conçue pour aller au-delà du concept de performance, faisant d’emblée figure de référence dans le domaine des supersportives et devançant les voitures du futur. Une famille de supercars déjà inscrite dans la légende.", [600, 900, 1800], 'aventador.png', 700, 2, 2018, 'Auto')
let car3 = new Car(3, 'Audi R8 v10 plus', "V10 atmosphérique, 620 ch, 580 Nm de couple... Découvrez la plus puissante des Audi de série. Une supercar, à l’aise sur piste comme sur route.", [550, 700, 1600], 'r8.png', 620, 2, 2018, 'Auto')
let car4 = new Car(4, 'Audi RS6', "Avec son moteur V8 TFSI bi-turbo et ses technologies dernier cri, le break de chasse familial gagne en efficacité. Découvrez le plus intense des breaks Audi jamais produits.", [450, 650, 1300], 'rs6.png', 600, 5, 2018, 'Auto')
let car5 = new Car(5, 'M2 Competition', "Les BMW M2 incarnent le plaisir de la conduite sportive dans sa plus pure expression. Elle se distingue par une sportivité accrue et impressionne par son mélange exceptionnel de performances, d’agilité et de précision.", [275, 400, 720], 'm2.png', 450, 4, 2020, 'Auto')
let car6 = new Car(6, 'Lamborghini Urus', "Lamborghini Urus est le premier Super Sport Utility Vehicle au monde, associant l’âme d’une supersportive et la praticité d’un SUV. L’Urus passe de 0 à 100 km/h en 3,6 secondes et peut atteindre la vitesse maximale de 305 km/h.", [550, 700, 1600], 'urus.png', 650, 5, 2020, 'Auto')

cars.push(car1, car2, car3, car4, car5, car6);