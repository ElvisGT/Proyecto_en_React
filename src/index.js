// const element = document.createElement('h1');
// element.innerText ="Hola mundo de React";

// const container = document.getElementById('app');

// container.appendChild(element);

import Badge from './components/Badge';
import React from 'react'
import ReactDOM from 'react-dom'



// const jsx = <h1>Hello world of React</h1>;
// const element = React.createElement('a',{href:"#"},"Hola soy los children.");

const name = "Elvis";
const jsx = 
            <div>
            <h1>Hola mi nombre es {name}</h1>
            <p>Soy ingeniero frontend</p>
            </div>;
// const element = React.createElement(
//     'h1',
//     {},
//     `Hola me llamo ${name}`
// );

const element = React.createElement(
    'div',
    {},
    React.createElement('h1',{},`Hola soy ${name}`),
    React.createElement('p',{},'Soy ingeniero frontend')
)

const container = document.getElementById('app');

ReactDOM.render(<Badge/>,container);
