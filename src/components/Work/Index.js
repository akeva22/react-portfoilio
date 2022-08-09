import React from 'react'



function Work() {

    const Projects = [
        {
            name: 'catme', 
            description: 'some shit'

        }, 

        {
            name: 'artist nation presslist',
            description: 'some shit'
        }, 

        {
            name: 'deep thoughts',
            description: 'some shit'
        }, 

        {
            name: 'weather dashboard',
            description: 'a weather dashboard'
        }, 

        {
            name: 'daily planner', 
            description: 'plan your day, with color coded sceheduling'
        }, 
        { 
            name: 'read generator',
            description: 'generate a read me with this repo!'
        }
    ] 


    return (
        <section className='my-5'>
            <div>
                <h1 id='#work'>Work</h1>
                <p>Portfoilio Will go here, should be fun.</p>
            </div>
            <div>
                <div className='flex-row mobile-row'>
                    <li>
                        <p className='mx-1'>{Projects[0].name}</p>
                        <a href='https://www.tutorialspoint.com/How-to-use-an-image-as-a-link-in-HTML'>
                        <img
                            src={require(`../../assets/Projects/redhook.jpg`)}
                            alt="current category"
                        />
                        </a>
                    </li>
                    <li>
                    <p className='mx-1'>{Projects[1].name}</p>
                        <img
                            src={require(`../../assets/Projects/redhook.jpg`)}
                            alt="current category"
                        />
                    </li>
                    <li>
                    <p className='mx-1'>{Projects[2].name}</p>
                        <img
                            src={require(`../../assets/Projects/redhook.jpg`)}
                            alt="current category"
                        />
                    </li>
                    <li>
                    <p className='mx-1'>{Projects[3].name}</p>
                        <img
                            src={require(`../../assets/Projects/redhook.jpg`)}
                            alt="current category"
                        />
                    </li>
                    <li>
                    <p className='mx-1'>{Projects[4].name}</p>
                        <img
                            src={require(`../../assets/Projects/redhook.jpg`)}
                            alt="current category"
                        />
                    </li>
                    <li>
                    <p className='mx-1'>{Projects[5].name}</p>
                        <img
                            src={require(`../../assets/Projects/redhook.jpg`)}
                            alt="current category"
                        />
                    </li>
                </div>
            </div>

        </section>



    )
}

export default Work; 