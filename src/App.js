import React, { useState } from 'react'
import './App.css';
import About from './components/About/Index';
import Nav from './components/Nav/index';
import Work from './components/Work/Index';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState("About")


  const displayPage = () => { 
    if (currentPage === "About")
      return <About />;

      if (currentPage === "Work")
      return <Work />;

      if (currentPage === "Contact")
      return <Contact />;
  }

  return (
    <div>
      <header>
        <Nav setCurrentPage={setCurrentPage}></Nav>
      </header>
      <header/>
      <main>
        {displayPage()}
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
