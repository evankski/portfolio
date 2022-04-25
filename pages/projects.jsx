
export default function Projects() {
    return (
        <div>
            <h1 className="skills-h1">Projects</h1>
            <div className="all-projects">
                <div className="project-1">
                    <img src="https://i.imgur.com/eo2TaUV.png" alt="A picture example of bussin bagles" width={'40%'} style={{borderRadius: 100/ 2}}/>
                    <div className="bussin-bagels">
                        <h1>Bussin Bagels</h1>
                        <p>A browser game developed using HTML/CSS, vanilla JavaScript, and Canvas. The objective of the game is to collect as many ingredients for your bagel sandwich as you can. If you catch a cockroach, you lose.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/evankski/bussin-bagels-pq" className="project-link">GitHub</a>
                        <a target="_blank" rel="noreferrer" href="https://evankski.github.io/bussin-bagels-pq/" className="project-link">Deployed</a>
                    </div>
                </div>
                <div className="project-1">
                <img src="https://i.imgur.com/OHEfRY5.png" alt="A picture example of fillow" width={'40%'} style={{borderRadius: 100/ 2}} />
                    <div className="fillow">
                        <h1>Fillow</h1>
                        <p>Utilizing Node.js, Express.js, PostgreSQL, and the Mapbox API, I was able to create Fillow! Fillow is a take on Zillow, with CRUD function that allows you to upload your own listings. Communicating with the database, there is the option to favorite a listing, and comment on any listing. User authentication allows comments and listings to be significant to the user who created it, only allowing them to edit or delete.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/evankski/fillow" className="project-link">GitHub</a>
                        <a target="_blank" rel="noreferrer" href="https://fillow.herokuapp.com/" className="project-link">Delpoyed</a>
                    </div>
                    
                </div>
                <div className="project-1">
                    <img src="https://i.imgur.com/SKfVEP0.png" alt="A picture example of A day in the life" width={'40%'} style={{borderRadius: 100/ 2}}/>
                    <div className="bussin-bagels">
                        <h1>A day in the life</h1>
                        <p>A day in the life is a MERN stack application created in a group of 3 using git flow. This is a social media website that is meant to be based on viewing someones profile rather than their feed, making it feel more personal.</p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/evankski/day-in-life-client" className="project-link">GitHub</a>
                        <a target="_blank" rel="noreferrer" href="https://gregarious-starlight-3d969a.netlify.app/" className="project-link">Deployed</a>
                    </div>
                </div>
            </div>
        </div>
    )
}