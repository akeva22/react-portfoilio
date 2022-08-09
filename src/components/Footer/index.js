import React from "react";


function Footer() {
    return (

        <section className="text-center">
            <div className>
                <a
                    href="https://github.com/akeva22"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require("../../assets/logos/github-logo.png")}
                        alt="Github"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
            <a
					href="https://twitter.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/Twitter-logo.png")}
						alt="twitter"
						className="logo"
					></img>
				</a>
            </div>
            <div>
            <a
					href="https://linkedin.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedinlogo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
            </div>
        </section>

    )
}

export default Footer; 