import React, { useState } from 'react'
import './App.css';
import About from './components/About/Index';
import Nav from './components/Nav/index';
import Work from './components/Work/Index';
import Contact from './components/Contact';

function App() {
  const [isClicked, setIsClicked] = useState(false)


  return (
    <div>
      <Nav
        isClicked={isClicked}
        setIsClicked={setIsClicked}></Nav>
      <main>
        <About></About>
        {!isClicked  && <Work />} 
        {!isClicked && <Contact />}
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
