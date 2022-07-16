import React from 'react'
import ReactDOM from 'react-dom/client';
import { Page } from './page/Page';
import 'bootstrap/dist/css/bootstrap.css'

//parent
export const Greeter = () => {
    return <Hello name={"Subramanian"} />
}
//child
export const Hello = (props) => {
    return <h1>Hello {props.name}</h1>
}

//Root Node/Component
const App = () => {
    return <Greeter />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)