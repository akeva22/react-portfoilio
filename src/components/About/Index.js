import React from 'react'


function About() {

    return (
        <section className="my-5">

            <h1 id="about">The Silver Surfer</h1>
            <img
                src={require('../../assets/Avi/fakeavi.jpg')}
                alt="FakeAvi"
            />
            <div>
                <p>We accomplished a lot in the last few chapters! Let's recap—we started with a blank canvas, added a few pages of content, styled everything to look pretty, dropped in a picture of Tomster, added links between our pages and amazingly, everything worked together flawlessly!

                    But do we really know that everything is actually working? Sure, we clicked around a bit to confirm that things look as expected. But do we feel confident that we checked every page after the most recent change that we made?

                    After all, most of us have experienced (or heard horror stories about) making a Small Tweak™ in one area of the app that inadvertently broke everything else when we weren't looking.

                    Maybe we can write a checklist somewhere of all the things to check after making changes to our site. But surely, this will get out of hand as we add more features to our app. It is also going to get old really quickly—repetitive tasks like that are best left to robots.

                    Hmm, robots. That's an idea. What if we can write this checklist and just get the computer to check everything for us? I think we just invented the idea of automated testing! Okay, maybe we were not the first to come up with the concept, but we independently discovered it so we still deserve some credit.</p>
            </div>

        </section>
    )
}

export default About; 