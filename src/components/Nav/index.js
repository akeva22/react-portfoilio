import React from 'react';
import Silver from '../../assets/Cover Image/silver-surfer.jpg'

function Nav(props) {

const {currentPage, setCurrentPage} = props
    
    return (
        <header className='flex-row px-1'>
             <img src={ Silver } className="my-2" style={{width:"100%"}} alt="cover" />
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸 </span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        {/* <a href='#about' page> About </a> */}
                        <span onClick={() => setCurrentPage("About")}> About </span>
                    </li>
                    <li className ='mx-2'>
                        {/* <a href='#work'> Work </a> */}
                        <span onClick={() => setCurrentPage("Work")}> Work </span>
                    </li>
                    <li className='mx-2'>
                        <span onClick={() => setCurrentPage("Contact")}> Contact </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}



export default Nav;