import { carService } from '../services/carService';

// Dispatchers
const _removeCar = (carId) => ({ type: 'REMOVE_CAR', carId });
const _setCars = (cars) => ({ type: 'SET_CARS', cars });
const _setFilter = (filterBy) => ({ type: 'SET_FILTER', filterBy });

// THUNK
export function loadCars(filterBy) {
    return async (dispatch) => {
        const cars = await carService.query(filterBy);
        dispatch(_setCars(cars));
    }
}
export function removeCar(carId) {
    return async (dispatch) => {
        carService.remove(carId)
        dispatch(_removeCar(carId))
    }
}
export function setFilter(filterBy) {
    return (dispatch) => dispatch(_setFilter(filterBy))
}

export function saveCar(car) {
    return async (dispatch,getState) => {
        const type = car._id ? 'UPDATE_CAR' : 'ADD_CAR';
        const savedCar = await carService.save(car)
        dispatch({ type, car: savedCar })
        
    }
}
