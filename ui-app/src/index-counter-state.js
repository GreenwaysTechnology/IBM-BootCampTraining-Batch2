import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'


//state 
const Counter = () => {
    //state declaration
    //variableName,set+Variable
    const [count, setCount] = useState(0)

    //event Listner
    const onIncrement = () => {
        //state mutation 
        setCount(count => {
            return count + 1
        })
    }

    return <div className="container">
        <h1>Counter App - State</h1>
        <h1>Counter :{count}</h1>
        <button onClick={onIncrement} >+</button>
    </div>

}

//Root Node/Component
const App = () => {
    return <Counter />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)