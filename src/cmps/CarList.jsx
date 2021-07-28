import React from 'react'
import { CarPreview } from './CarPreview.jsx'

const _CarList = ({ cars, onDeleteCar }) => {
    console.log('CarList render');
    return (
        <div className='car-list'>
            {cars.map(car =>
                <CarPreview key={car._id} car={car} onDeleteCar={onDeleteCar} />
            )}
        </div>
    )
}
export const CarList = React.memo(_CarList)