import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { render } from '@testing-library/react';
import { Component } from 'react'


// class Hello extends Component {
//     render() {
//         return (
//             <div className='f1 tc'>
//                 <h1>hello ww</h1>
//                 <p>welllccc</p>
//                 <p>{this.props.greeting}</p>

//             </div>

//         );
//     }

// }

const Hello = (props) => {
    return (
        <div className=' f1 tc'>
            <p>{props.greeting}</p>
        </div>
    )
}


export default Hello;