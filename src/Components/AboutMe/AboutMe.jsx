import "./AboutMe.css"
const AboutMe = () => {
  return (
    <div>
      <p id="pAboutMe">I'm Nicolas Monach, programming student. Looking to grow in the field.<br/>
      <br/>
      I am currently studying Backend Programming. <br/>
      I am looking for new learning and working opportunities in the programming environment, <br/>
      if you're interested in incorporating a decisive collaborator, <br/>
      with ease of learning and excellent predisposition to adapt to changes, contact me.<br/>
      <br/>
      Best regards!</p>
      <a href="/index.html"><button id="btn-back" className="btn btn-dark">Back</button></a>
      <a href="/knowledge.html"><button id="btn-next" className="btn btn-success">Next</button></a>
    </div>
  )
}

export default AboutMe