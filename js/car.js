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
 * @param {Array} _options 
 * @param {String} _transmission 
 */
const Car = function(_mod, _desc, _prices, _url, _cv, _nbPlaces, _year, _options, _transmission) {
    this.mod = _mod;
    this.desc = _desc;
    this.prices = _prices;
    this.url = _url;
    this.cv = _cv;
    this.nbPlaces = _nbPlaces;
    this.year= _year;
    this.options = _options;
    this.transmission = _transmission;
}

/**
 * get car(s) that match with the current keyword
 * @param { String } keywords 
 */
export let search = function(keywords) {
    return products.filter(product => product.ref.includes(keywords) || product.description.includes(keywords))
}

let car1 = new Car('C63s', 'Superbe voiture de sport du concessionnaire Mercedes, elle allie classe et sportivité.', [400, 600, 1200], 'c63s.jpg', 510, 4, 2018, [], 'Auto')
let car2 = new Car('R8 v10 plus', "Voiture de course emblématique du concessionnaire Audi, elle est la plus performante du constructeur."[550, 700, 1600], 'r8.jpg', 620, 2, 2018, [], 'Auto')
let car3 = new Car('Aventador', "Voiture de course digne de la batmobile, l'une des voitures les plus performantes de Lamborghini."[600, 900, 1800], 'aventador.jpg', 700, 2, 2018, [], 'Auto')

cars.push(car1, car2, car3);