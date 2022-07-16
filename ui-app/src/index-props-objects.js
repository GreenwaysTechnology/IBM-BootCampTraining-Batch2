import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'

const Product = () => {
    return <>
        <ProductDetails product={{
            id: 1,
            name: 'Phone'
        }} reviews={['Good', 'Bad']} />
    </>
}
const ProductDetails = props => {
    return <div>
        <h1>Id : {props.product.id}</h1>
        <h1>Name : {props.product.name}</h1>
        {/* render */}
        <ul>
            {props.reviews.map(review => {
                return <li>
                    <span>{review}</span>
                </li>
            })}
        </ul>
    </div>
}

//Root Node/Component
const App = () => {
    return <Product />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)