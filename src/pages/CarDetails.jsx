import React, { useEffect, useState } from 'react'
import { carService } from "../services/carService.js"

export const CarDetails = ({ match, history }) => {
    const [car, setCar] = useState(null)

    useEffect(() => {
        const loadCar = async () => {
            const { id } = match.params
            const _car = await carService.getById(id)
            setCar(_car)
        }

        loadCar()

        // eslint-disable-next-line
    }, [match.params.id])

    if (!car) return <div>Loading</div>
    return (
        <div className='car-details'>
            <img src={`imgs/${car.imgName}.jpg`} alt="" />
            <div className='details'>
                <p><span className='bold'>Vendor:</span> {car.vendor}</p>
                <p><span className='bold'>Speed:</span> {car.speed}</p>
                <p>
                    <span className='bold'>Description: </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maxime quidem fugiat vel provident saepe laborum optio rem doloremque, esse itaque iure enim asperiores, nulla aspernatur consectetur nisi nostrum ea. Nihil sed quo, ratione perferendis a ad ipsam commodi provident alias rerum harum laboriosam autem quidem! Ipsam sed a odit?</p>
            </div>
            <button onClick={() => history.push('/car/c2')}>Next car</button>
            <button className='btn' onClick={() => history.goBack()}>Go Back</button>
        </div>
    )
}


// export class CarDetails extends React.Component {
//     state = {
//         car: null
//     }
//     componentDidMount() {
//         this.loadCar()
//     }

//     async loadCar() {
//         const { id } = this.props.match.params
//         const car = await carService.getById(id)
//         this.setState({ car })
//     }

//     render() {
//         const { car } = this.state
//         if (!car) return <div>Loading...</div>
//         return (
//             <div className='car-details'>
//                 <img src={`imgs/${car.imgName}.jpg`} alt="" />
//                 <div className='details'>
//                     <p><span className='bold'>Vendor:</span> {car.vendor}</p>
//                     <p><span className='bold'>Speed:</span> {car.speed}</p>
//                     <p>
//                         <span className='bold'>Description: </span>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maxime quidem fugiat vel provident saepe laborum optio rem doloremque, esse itaque iure enim asperiores, nulla aspernatur consectetur nisi nostrum ea. Nihil sed quo, ratione perferendis a ad ipsam commodi provident alias rerum harum laboriosam autem quidem! Ipsam sed a odit?</p>
//                 </div>
//                 <button className='btn' onClick={() => this.props.history.goBack()}>Go Back</button>
//             </div>
//         )
//     }
// }