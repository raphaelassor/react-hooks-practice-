import React, { useEffect, useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    // We can have lots of state
    // const [isDarkMode, setsIDarkMode] = useState(false)

    const changeCount = (diff) => {
        setCount(prevCount => prevCount + diff)
        console.log(count);
    }

    useEffect(() => {
        console.log('Mounted!');

        return () => {
            console.log('Unmounted!');
        }
    }, [])

    useEffect(() => {
        if (count) document.title = count

        return () => {
            document.title = 'Car Shop'
        }
    }, [count])

    return (
        <div className='counter'>
            <button className='btn'
                onClick={() => changeCount(+1)}>Increment</button>
            {count}
            <button className='btn'
                onClick={() => changeCount(-1)}>Decrement</button>
        </div>
    )
}







// export class Counter extends React.Component {
//     state = {
//         counter: 0
//     }
//     render() {
//         return (
//             <div className='counter'>
//                 <button className='btn'
//                     onClick={ () => this.setState(prevState => ({ counter: prevState.counter + 1 })) }>Increment</button>
//                 { this.state.counter }
//                 <button className='btn'
//                     onClick={ () => this.setState(prevState => ({ counter: prevState.counter - 1 })) }>Decrement</button>
//             </div>
//         )
//     }
// }
