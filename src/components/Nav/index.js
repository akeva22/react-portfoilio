import Silver from '../../assets/Cover Image/silver-surfer.jpg'

function Nav(props) {

const { 
    setIsClicked,
    isClicked,
} = props
    
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
                        <a href='#about'> About </a>
                    </li>
                    <li className='mx-2'>
                        <a href='#work' onClick={() => setIsClicked(!isClicked)}> Work </a>
                    </li>
                    <li className='mx-2'>
                        <a href='#contact' onClick={() => setIsClicked(!isClicked)}> Contact </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;