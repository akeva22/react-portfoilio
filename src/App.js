import React, { useState } from 'react'
import './App.css';
import About from './components/About/Index';
import Nav from './components/Nav/index';

function App() {
  const [categories] = useState([
    { name: 'Menu' },
    { name: 'Menu2' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
       <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <About></About>
      </main>
      <footer>
        <p>
          Balls
        </p>
      </footer>
    </div>
  );
}

export default App;
