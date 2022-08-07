import React from 'react' 
import Silver from '../../assets/Cover Image/silver-surfer.jpg'

function About () { 
    return ( 
        <section className="my-5"> 
        <h1 id="about">The Silver Surfer</h1>
        <img src={ Silver } className="my-2" style={{width:"50%"}} alt="cover" />
        </section>
    )
}

export default About