import "./Knowledge.css"
import ProgressBar from 'react-bootstrap/ProgressBar';

const Knowledge = () => {
  return (
    <div>
      <p className="progressKnowledge">HTML5<ProgressBar animated now={90} /></p>
      <p className="progressKnowledge">CSS3<ProgressBar animated now={75} /></p>
      <p className="progressKnowledge">Javascript<ProgressBar animated now={85} /></p>
      <p className="progressKnowledge">ReactJS<ProgressBar animated now={95} /></p>
      <p className="progressKnowledge">Bootstrap<ProgressBar animated now={60} /></p>
      <p className="progressKnowledge">Backend Programming<ProgressBar animated now={15} /></p>
      <p className="progressKnowledge">Salesforce<ProgressBar animated now={50} /></p> 
      <a href="/about-me.html"><button id="btn-back" className="btn btn-dark">Back</button></a>
      <a href="/experience.html"><button id="btn-next" className="btn btn-success">Next</button></a>
    </div>
  )
}

export default Knowledge