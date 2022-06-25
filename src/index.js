import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Card from './Card';
import CardList from './CardList';

import CardApp from './CardApp'
import { robots } from './robots';

import ReviewCard from './reviewCard';
import { Review } from './review';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.Fragment>
    <h1>Hello aaaaaaaa</h1>,
    {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}

    {/* <CardList robots={robots} /> */}


    <CardApp robots={robots} />
    <Hello greeting={'sdfdskfsd;kfdsfaaaaaaaaaaaaaaaaaaaaa' + 'dfsfdsfsdffsd'} />


    <App />
    {/* const len = Review.length
    for (let i = 0; i < len; i++) {
      if(Review[i].course_id === 'CS-7646')
      <ReviewCard course_id={Review[i].course_id} body={Review[i].body} />

      
    } */}






  </React.Fragment>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
