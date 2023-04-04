import "./NavBar.css"
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="Curriculum Nicolas Monach 19-03-2023.pdf" target="_blank">
                <img id="photoCV" src="photoCV.jpg" alt="Logo" width="90" height="90" className="d-inline-block align-text-middle"/>
                <> Nicolas Monach</>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/index.html"><img src="resume.png" width={20} alt="resume" />
                        <br />Home</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="/about-me.html"><img src="aboutMe.png" width={20} alt="about-me" />
                        <br/>About Me</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="/knowledge.html"><img src="knowledge.png" width={20} alt="knowledge" />
                        <br/>Knowledge</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="/experience.html"><img src="experience.png" width={20} alt="experience" />
                        <br/>Experience</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="/formation.html"><img src="scholarship.png" width={20} alt="formation" />
                        <br/>Formation</a>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <a className="nav-link" href="/contact.html"><img src="socialNetworks.png" width={20} alt="contact" />
                        <br/>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>  
    )
}

export default NavBar