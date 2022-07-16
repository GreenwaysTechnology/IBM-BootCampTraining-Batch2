//React lib is distributed as npm module
import React from 'react'
import ReactDOM from 'react-dom/client';

class Header extends React.Component {

    render() {
        return  <div>
            <header>
                <h1>
                    Header
                </h1>
            </header>
        </div>
    }
}


//render /insert into index.html

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />)







