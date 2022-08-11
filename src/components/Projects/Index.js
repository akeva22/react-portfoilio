import React from 'react'

function Projects() {

    const projects = [
        {
            name: 'catme', 
            description: 'Get a fact and pic of a cat!',
            link: 'https://github.com/akeva22/deep-thoughts'

        }, 
        {
            name: 'artist nation presslist',
            description: 'Presslist to organize data for Artist Nation',
            link:'https://github.com/sammylwolfson/artistnation-presslist'
        }, 
        {
            name: 'deep thoughts',
            description: 'API driven social media platform for your deepest darkest thoughts',
            link:'https://github.com/akeva22/deep-thoughts'
        }, 

        {
            name: 'weather dashboard',
            description: 'A weather dashboard',
            link:'https://github.com/akeva22/Daily-Weather'
        }, 

        {
            name: 'daily planner', 
            description: 'plan your day, with color coded scheduling', 
            link: 'https://github.com/akeva22/Daily-Planner'
        }, 
        { 
            name: 'Project Inventory Database(Deja IMP)',
            description: 'Keep track of products and vendors with this handy database application!',
            link:'https://github.com/edellenator/Deja-imp'
        }
    ] 

    return (
        <section className='my-5 grid text-center'>
            <div>
                <h1 id='#work'>Projects</h1>
                <p>Portfoilio Will go here, should be fun.</p>
            </div>
            <div className='display-5 flex-row mobile-row grid text-center'>
                <div className='d-flex flex-wrap'>
                    <li className='card'>
                        <p className='mx-1 card-title'>{projects[0].name}</p>
                        <p className='card-body'>{projects[0].description}</p>
                        <a href={projects[0].link}>
                        <img className=''
                            src={require(`../../assets/Projects/catme.jpg`)}
                            alt="current category"
                        />
                        </a>
                    </li>
                    <li className='card '>
                    <p className='mx-1 card-title'>{projects[1].name} </p>
                    <p className='card-body'>{projects[1].description}</p>
                    <a href={projects[1].link}>
                        <img
                            src={require(`../../assets/Projects/presslist.jpg`)}
                            alt="current category"
                        />
                        </a>
                    </li>
                    <li className='card'>
                    <p className='mx-1 card-title'>{projects[2].name}</p>
                    <p className='card-body'>{projects[2].description}</p>
                    <a href={projects[2].link}>
                        <img
                            src={require(`../../assets/Projects/deepthoughts.jpg`)}
                            alt="current category"
                        />
                        </a>
                    </li>
                    <li className='card'>
                    <p className='mx-1 card-title'>{projects[3].name}</p>
                    <p className='card-body'>{projects[3].description}</p>
                    <a href={projects[3].link}>
                        <img
                            src={require(`../../assets/Projects/weatherdash.jpg`)}
                            alt="current category"
                        />
                        </a>
                    </li>
                    <li className='card'>
                    <p className='mx-1 card-title'>{projects[4].name}</p>
                    <p className='card-body'>{projects[4].description}</p>
                    <a href={projects[4].link}>
                        <img
                            src={require(`../../assets/Projects/dailyplan.jpg`)}
                            alt="current category"
                        />
                        </a>
                    </li>
                    <li className='card'>
                    <p className='mx-2 card-title'>{projects[5].name}</p>
                    <p className='card-body'>{projects[5].description}</p>
                    <a href={projects[5].link}>
                        <img
                            src={require(`../../assets/Projects/gen.jpg`)}
                            alt="current category"
                        />
                        </a>
                    </li>
                </div>
            </div>

        </section>
    )
}

export default Projects; 