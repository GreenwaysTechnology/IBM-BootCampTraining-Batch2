import React from 'react'
import ReactDOM from 'react-dom/client';
import { Page } from './page/Page';
import 'bootstrap/dist/css/bootstrap.css'
// import './index.css'


//Root Node/Component
const App = () => {
    return <Page />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)