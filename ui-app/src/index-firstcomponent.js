//React lib is distributed as npm module
import React from 'react'
import ReactDOM from 'react-dom/client';

/**UI Create
 *  -JSX language
 * 
 * The complex UI is broken into smaller and smaller,smaller part is called Component
 * Component is Object which constitues - Markup(html) and data
 * UI is created as component
 *  * 
 * in order to create component we have three ways or patterns
 * 1.variable pattern
 * 2.function pattern
 * 3.class pattern 
 */
const Header = <div>
    <header>
        <h1>
        Header
        </h1>
    </header>
</div>

//render /insert into index.html

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Header)







