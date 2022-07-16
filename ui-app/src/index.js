import React, { useEffect,useState } from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

//layout 
const Layout = () => {
    // menus
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/transcations">Transactions</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
            </ul>
        </nav>
        <hr />

        {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
        <Outlet />
    </div>
}
const Home = () => <h1>IBM-home</h1>
const About = () => <h1>IBM-about</h1>
const Dashboard = () => <h1>IBM-dashboard</h1>
const Transactions = () => <h1>TransactionPage</h1>

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

const App = () => {

    return <BrowserRouter>
        <Routes>
            {/* root route */}
            <Route path="/" element={<Layout />}>
                {/* Child routes */}
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="transcations" element={<Transactions />} />
                <Route path="todos" element={<Todos />} />

            </Route>
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(<App />, document.getElementById('root'))



