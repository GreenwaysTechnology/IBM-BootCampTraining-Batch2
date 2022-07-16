import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


const Todos = () => {
    //todos 
    const [todos, setTodos] = useState({
        error: null,
        isLoaded: false, //spiner status
        items: [] // data
    })

    //webservice call
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        fetch(url).then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(prevState => ({ ...prevState, items: prevState.items.concat(todos), isLoaded: true }))
                }, 1000)

            })
            .catch(err => {
                setTodos(prevState => ({ ...prevState, isLoaded: true, error: err }))
            });
    }, [])

    //render code
    const { error, isLoaded, items } = todos;
    if (error) {
        return <Error error={error} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <div>
            <h1>Todo App</h1>
            <ul>
                {items.map(todo => {
                    return <li key={todo.id}>{todo.title}</li>
                })}
            </ul>
        </div>
    }

}

const Error = props => {
    return <>
        <h2>{props.error}</h2>
    </>
}
const Spinner = props => {
    return <>
        <h2 style={{ backgroundColor: 'yellow' }}>Loading...</h2>
    </>
}
//Root Node/Component
const App = () => {
    return <Todos />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)