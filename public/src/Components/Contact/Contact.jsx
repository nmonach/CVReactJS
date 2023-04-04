import "./Contact.css"
const Contact = () => {
  return (
    <div>
      <p id="contactMe">Contact me through these channels:</p>
      <div className="allContact">
        <a href="mailto:nico.monach@gmail.com" target="_blank"><img className="social" src="./gmail.png" alt="Email"/></a>
        <a href="https://api.whatsapp.com/send?phone=541135757947&text=%C2%A1Hola!%20Quisiera%20contactárme%20por%20una%20propuesta." target="_blank"><img className="social" src="./whatsapp.png" alt="WhatsApp"/></a>
        <a href="https://www.linkedin.com/in/nicolasmonach/" target="_blank"><img className="social" src="./linkedin.png"  alt="LinkedIn"/></a>
      </div>
      <a href="/formation.html"><button id="btn-back" className="btn btn-dark">Back</button></a>
      <a href="/index.html"><button id="btn-next" className="btn btn-warning">Home</button></a>
    </div>
  )
}

export default Contact