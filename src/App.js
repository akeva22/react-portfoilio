import React, { useState } from 'react'
import './App.css';
import About from './components/About/Index';
import Nav from './components/Nav/index';
import Projects from './components/Projects/Index';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume'


function App() {
  const [currentPage, setCurrentPage] = useState("About")


  const displayPage = () => { 
    if (currentPage === "About")
      return <About />;

      if (currentPage === "Work")
      return <Projects />;

      if(currentPage === "Resume")
      return <Resume />

      if (currentPage === "Contact")
      return <Contact />;
  }

  return (
    <div className='body'>
      <header>
        <Nav setCurrentPage={setCurrentPage}></Nav>
      </header>
      <header/>
      <main>
        {displayPage()}
      </main>
    <Footer />
    </div>
  );
}

export default App;
