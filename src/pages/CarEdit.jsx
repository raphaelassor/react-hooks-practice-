import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { carService } from "../services/carService.js"
import { saveCar } from '../actions/CarActions'
import { useForm } from '../services/customHooks.js'

export const CarEdit = ({ history, match }) => {
    const [car, handleChange, setCar] = useForm(carService.getEmptyCar())

    const dispatch = useDispatch()
    useEffect(() => {
        loadCar()
    }, [])

    const loadCar = async () => {
        const { id } = match.params
        if (id) {
            const _car = await carService.getById(id)
            setCar(_car)
        }
    }

    const onAddCar = async (ev) => {
        ev.preventDefault()
        dispatch(saveCar(car))
        history.push('/')
    }
    return (
        <form className="car-edit container" onSubmit={(ev) => onAddCar(ev)}>
            <div>
                <label htmlFor="">Vendor:</label>
                <input type="text" name="vendor" placeholder="Vendor" value={car.vendor} onChange={handleChange} />
                <label htmlFor="">Speed:</label>
                <input type="number" name="speed" placeholder="Speed" value={car.speed} onChange={handleChange} />
                <button className='btn'>Save</button>
            </div>
        </form>
    )
}


// class _CarEdit extends React.Component {
//     state = {
//         car: null
//     }
//     componentDidMount() {
//         const { id } = this.props.match.params
//         this.loadCar(id)
//     }
//     async loadCar(id) {
//         const car = id ? await carService.getById(id) : await carService.getEmptyCar()
//         this.setState({ car })
//     }
//     handleChange = (ev) => {
//         const field = ev.target.name
//         const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
//         this.setState(prevState => ({ car: { ...prevState.car, [field]: value } }))
//     }
//     onAddCar = async (ev) => {
//         ev.preventDefault()
//         this.props.saveCar(this.state.car)
//         this.props.history.push('/')
//     }
//     render() {
//         const { car } = this.state
//         if (!car) return <div>Loading....</div>
//         return (
//             <form className="car-edit container" onSubmit={ (ev) => this.onAddCar(ev) }>
//                 <div>
//                     <label htmlFor="">Vendor:</label>
//                     <input type="text" name="vendor" placeholder="Vendor" value={ car.vendor } onChange={ this.handleChange } />
//                     <label htmlFor="">Speed:</label>
//                     <input type="number" name="speed" placeholder="Speed" value={ car.speed } onChange={ this.handleChange } />
//                     <button className='btn'>Save</button>
//                 </div>
//             </form>
//         )
//     }
// }
// const mapDispatchToProps = {
//         saveCar
// };

// export const CarEdit = connect(null, mapDispatchToProps)(_CarEdit);
