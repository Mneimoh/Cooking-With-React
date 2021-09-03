import React, {useState, useContext} from 'react'
import { ThemeContext } from './App'

export default function CounterHooks({ initialCount }) { // CounterHooks(props) <span>{props.initialCount}</span>
    /*const [state, setState] = useState({count: initialCount})
    // for lines 8 {count: state.count - 1 })
    return (
        <div>
            <button onClick={ () => setState(prevState => {
                return {count: prevState.count - 1 }
                })}>-</button>
            <span>{state.count}</span> 
            <button onClick={ () => setState({ count: state.count + 1 })}>+</button>
        </div>
    )*/
    console.log('Render Counter Hooks')
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)

    return (
        <div>
            <button style={style} onClick={() => setCount( prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={() => setCount( prevCount => prevCount + 1)}>+</button>
        </div>
    )
}