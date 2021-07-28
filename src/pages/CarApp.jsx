import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { loadCars, removeCar, setFilter } from '../actions/CarActions'
import { CarList } from '../cmps/CarList'
import { CarFilter } from '../cmps/CarFilter';
import { Counter } from '../cmps/Counter';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Clock } from '../cmps/Clock'

export const CarApp = () => {
    const dispatch = useDispatch()
    const { cars, filterBy } = useSelector(state => state.carModule)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        dispatch(loadCars(filterBy))
    }, [filterBy])

    // This is how we preserve the function reference between renders
    const onDeleteCar = useCallback((carId) => {
        dispatch(removeCar(carId))
        // Dependency array, when to recreate the function? here its pointless.
    }, [])

    // This is how we avoid recalculation values, again with a dependency array
    // const bigNum = useMemo(() => cars.length * 2, [cars])
    // console.log(bigNum);
    return (
        <section className="car-app container">
            <CarFilter onSetFilter={(filterBy) => dispatch(setFilter(filterBy))} />
            <Link className='btn' to='/car/edit'>Add Car</Link>

            {cars && <CarList cars={cars} onDeleteCar={onDeleteCar} />}
            {/* <Counter />
            <Clock /> */}
            <button onClick={() => setIsDark(!isDark)}>Toggle Dark</button>
        </section>
    )
}




// class _CarApp extends React.Component {

//     componentDidMount() {
//         this.loadCars()
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.filterBy !== this.props.filterBy) this.loadCars()
//     }

//     loadCars() {
//         this.props.loadCars(this.props.filterBy)
//     }

//     onDeleteCar = (carId) => {
//         this.props.removeCar(carId)
//     }

//     onSetFilter = (filterBy) => {
//         this.props.setFilter(filterBy)
//     }

//     render() {
//         const { cars } = this.props
//         return (
//             <section className="car-app container">
//                 <CarFilter onSetFilter={this.onSetFilter} />
//                 <Link className='btn' to='/car/edit'>Add Car</Link>

//                 {cars && <CarList cars={cars} onDeleteCar={this.onDeleteCar} />}
//                 <Counter />
//                 <Clock />
//             </section>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         cars: state.CarReducer.cars,
//         filterBy: state.CarReducer.filterBy,
//     }
// }
// const mapDispatchToProps = {
//     loadCars,
//     removeCar,
//     setFilter,

// }

// export const CarApp = connect(mapStateToProps, mapDispatchToProps)(_CarApp)