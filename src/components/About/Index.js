import React from 'react'


function About() {

    return (
        <section className="my-5 grid text-center">
            <div className='g-col-6'>
                <h1 id="about">The Silver Surfer</h1>
                <img
                    src={require('../../assets/Avi/me.jpg')}
                    alt="FakeAvi"
                />
            </div>
            <div className='g-col-6'>
                <p>Hello my name is Akeva Melchor, I am humbly making my way through life as Cyber Secuirty analyst. I've always had a passion to pursue skills in technology since I was young. I am now finishing up Boot CAMP UCLA course in which I learned as much Javascript technologies as possible in 6 months. I still need a lot of work as this portfolio shows but I am always happy dedicating the the time to do it. </p>
            </div>

        </section>
    )
}

export default About; 

