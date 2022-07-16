//building component tree: you are building app 
import React from 'react'
import ReactDOM from 'react-dom/client';

// function add(){
//     return 10
// }
//arrow 
// const add = () => {
//     return 10
// }
// const add = () => 10



// const Header = () => {
//     return <header>

//     </header>
// }

const NavBar = () => <ul>
    <li>
        <a href="#">Services</a>
    </li>
    <li>
        <a href="#">ContactUs</a>
    </li>
    <li>
        <a href="#">Products</a>
    </li>
</ul>

const Header = () => <header>
    <NavBar />
</header>

const Footer = () => <footer>
    <p>IBM @copy right</p>
</footer>

const Body = () => <div>
    <section>
        <p>Section-1</p>
    </section>
    <section>
        <p>Section-1</p>
    </section>
</div>

const Page = () => <div>
    <Header />
    <hr/>
    <Body />
    <hr/>
    <Footer />
</div>


//Root Node/Component
const App = () => {
    return <Page />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)