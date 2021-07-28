import React from 'react'
import { useForm } from '../services/customHooks'


export const CarFilter = ({ onSetFilter }) => {

    const [filterBy, handleChange] = useForm({
        vendor: '',
        maxSpeed: '',
        minSpeed: ''
    }, onSetFilter)

    // const [fields, setFields] = useState({
    //     vendor: '',
    //     maxSpeed: '',
    //     minSpeed: ''
    // })

    // const handleChange = (ev) => {
    //     const field = ev.target.name
    //     const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
    //     setFields(prevFields => ({ ...prevFields, [field]: value }))
    // }

    // useEffect(() => {
    //     onSetFilter(fields)
    // }, [filterBy])

    const { vendor, maxSpeed, minSpeed } = filterBy
    return (
        <form className="car-filter" autoComplete="off" onSubmit={ev => ev.preventDefault()}>
            <label htmlFor="">Filter:</label>
            <input type="text" name="vendor" placeholder="By vendor" value={vendor} onChange={handleChange} />
            <input type="number" name="minSpeed" placeholder="min speed" value={minSpeed} onChange={handleChange} />
            <input type="number" name="maxSpeed" placeholder="max speed" value={maxSpeed} onChange={handleChange} />
        </form>
    )
}
// export class CarFilter extends React.Component {
//     state = {
//         vendor: '',
//         maxSpeed: '',
//         minSpeed: ''
//     }
//     handleChange = (ev) => {
//         const field = ev.target.name
//         const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
//         this.setState({ [field]: value }, () => this.props.onSetFilter(this.state))
//     }
//     render() {
//         const { vendor, maxSpeed, minSpeed } = this.state
//         return (
//             <form className="car-filter" autoComplete="off" onSubmit={ ev => ev.preventDefault() }>
//                 <label htmlFor="">Filter:</label>
//                 <input type="text" name="vendor" placeholder="By vendor" value={ vendor } onChange={ this.handleChange } />
//                 <input type="number" name="minSpeed" placeholder="min speed" value={ minSpeed } onChange={ this.handleChange } />
//                 <input type="number" name="maxSpeed" placeholder="max speed" value={ maxSpeed } onChange={ this.handleChange } />
//             </form>
//         )
//     }
// }