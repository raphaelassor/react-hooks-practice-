import { storageService } from './storageService.js'

export const carService = {
    query,
    save,
    remove,
    getById,
    getEmptyCar
}

var gDefaultCars = [
    { _id: 'c1', vendor: 'audu', speed: 210, imgName: 'c1' },
    { _id: 'c2', vendor: 'subali', speed: 180, imgName: 'c2' },
    { _id: 'c3', vendor: 'fiak', speed: 80, imgName: 'c3' },
    { _id: 'c4', vendor: 'makda', speed: 100, imgName: 'c4' }
]

const STORAGE_KEY = 'cars'
const gCars = _loadCars()

function query(filterBy) {
    let carsToReturn = gCars;
    if (filterBy) {
        var { vendor, maxSpeed, minSpeed } = filterBy
        maxSpeed = maxSpeed || Infinity
        minSpeed = minSpeed || 0
        carsToReturn = gCars.filter(car => car.vendor.toLowerCase().includes(vendor.toLowerCase())
            && (car.speed < maxSpeed)
            && car.speed > minSpeed)
    }
    return Promise.resolve([...carsToReturn]);
}

function getById(id) {
    const car = gCars.find(car => car._id === id)
    return Promise.resolve(car)
}

function remove(id) {
    const idx = gCars.findIndex(car => car._id === id)
    gCars.splice(idx, 1)
    storageService.saveToStorage(STORAGE_KEY, gCars)
    return Promise.resolve()
}

function save(carToSave) {
    if (carToSave._id) {
        const idx = gCars.findIndex(car => car._id === carToSave._id)
        gCars.splice(idx, 1, carToSave)

    } else {
        carToSave._id = _makeId()
        carToSave.imgName = 'default'
        gCars.push(carToSave)
    }
    storageService.saveToStorage(STORAGE_KEY, gCars)
    return Promise.resolve(carToSave);
}
function getEmptyCar() {
    return {
        vendor: '',
        speed: ''
    }
}
function _loadCars() {
    let cars = storageService.loadFromStorage(STORAGE_KEY)
    if (!cars || !cars.length) cars = gDefaultCars
    storageService.saveToStorage(STORAGE_KEY, cars)
    return cars
}

function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
