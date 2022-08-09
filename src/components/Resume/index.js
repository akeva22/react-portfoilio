import React from "react";

function Resume() {
    return (
        <section className="my-5 text-center">
            <h1>Technologies</h1>
            <div>
                <ol className="text-center list-group">
                <ul>
                    Node
                </ul>
                <ul>
                    ReactJs
                </ul>
                <ul>
                    Graph QL
                </ul>
                <ul>
                    MongoDB
                </ul>
                <ul>
                    SQL
                </ul>
                <ul>
                    Express
                </ul> 
                </ol>
            </div>
        <h2>Resume</h2>
            <div>
                <a href={require("../../assets/Resume/AkevaResume.pdf")}>
                Resume Download Link here
                </a>
            </div>
        </section>

    
    )
}

export default Resume