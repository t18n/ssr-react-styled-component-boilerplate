import React from 'react';
import ReactDom from 'react-dom';
import Router from './routes/routes';

console.log(`Secret: ${process.env.SECRET}`);
console.log(`Key: ${process.env.KEY}`);


ReactDom.render(<Router />, document.getElementById('root'));
