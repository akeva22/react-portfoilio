import React from 'react';

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
        <header className='flex-row px-1'>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name}`}
                            key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category);
                            }}
                            >
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;