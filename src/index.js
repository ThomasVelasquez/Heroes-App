import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';
/* import Styles from './HeroesApp.css'; */

// In Case we need to change te ReactDOM we can use the next code line and replace ReactDOM for const root
/* const root = ReactDOM.createRoot(document.getElementById('root')); */

ReactDOM.render(
  <HeroesApp />,
  document.getElementById('root')
);
