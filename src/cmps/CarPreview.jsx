import {Link} from 'react-router-dom'
import React from 'react'
export function CarPreview(props) {
    const { vendor, speed, _id,imgName } = props.car
    return (
        <article className="car-preview">
        <img src={ `imgs/${imgName}.jpg` } alt="car" />
        <p>Vendor: { vendor }</p>
        <p>Speed: { speed }</p>
            <Link className='btn' to={ `/car/${_id}` }>Details</Link>
            <Link className='btn' to={ `/car/edit/${_id}` }>Edit</Link>
        <button className="delete-btn" onClick={ () => props.onDeleteCar(_id) }>&times;</button>
    </article>
    )
}