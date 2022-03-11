import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Button from './components/button';
import Counter from './components/counter';

const App: Component = () => {
  return (
    <>
      <Counter />      
    </>
    
  );
};

export default App;
