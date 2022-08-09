import React from 'react';
import Silver from '../../assets/Cover Image/silver-surfer.jpg'

function Nav(props) {

const {currentPage, setCurrentPage} = props
    
    return (
        <header className='flex-row px-1'>
             <img src={ Silver } style={{width:"100%"}} alt="cover" />
            <h2>

            </h2>
            <nav className="a">
                <ul className='flex-row nav text-center'>
                    <li className='mx-5 navbar-text'>
                        {/* <a href='#about' page> About </a> */}
                        <span onClick={() => setCurrentPage("About")}> About </span>
                    </li>
                    <li className ='mx-5 navbar-text'>
                        {/* <a href='#work'> Work </a> */}
                        <span onClick={() => setCurrentPage("Work")}> Projects </span>
                    </li>
                    <li className ='mx-5 navbar-text'>
                        {/* <a href='#work'> Work </a> */}
                        <span onClick={() => setCurrentPage("Resume")}> Resume </span>
                    </li>
                    <li className='mx-5 navbar-text'>
                        <span onClick={() => setCurrentPage("Contact")}> Contact </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}



export default Nav;