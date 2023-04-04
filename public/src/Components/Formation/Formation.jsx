import "./Formation.css"
const Formation = () => {
  return (
    <div>
      <div>
          <ul className="list">
            <li className="formation">
              <h4><strong>Curso de Programacion Backend</strong></h4>
              <span className="site">Coderhouse</span>
              <span className="date"> 2023 (en curso)</span>
            </li>
            <li className="formation">
              <h4><strong><a href="./Reactjs.png" target="_blank">Curso de Programación ReactJS</a></strong></h4>
              <span className="site">Coderhouse</span>
              <span className="date"> 2022</span>
            </li>
            <li className="formation">
              <h4><strong><a href="./Javascript.png" target="_blank">Curso de Programación Javascript</a></strong></h4>
              <span className="site">Coderhouse</span>
              <span className="date"> 2022</span>
            </li>
            <li className="formation">
              <h4><strong><a href="./ticmas.pdf" target="_blank">Primeros Pasos del desarrollo frontend</a></strong></h4>
              <span className="site">Ticmas Academy</span>
              <span className="date"> 2023</span>
            </li>
            <li className="formation">
              <h4><strong>Secundario: Bachiller técnico en bienes y servicios (Orientación Electromecánica)</strong></h4>
              <span className="site">Instituto Tecnológico San Bonifacio</span>
              <span className="date"> 2007-2012</span>
            </li>
          </ul>
        </div>
      <a href="/experience.html"><button id="btn-back" className="btn btn-dark">Back</button></a>
      <a href="/contact.html"><button id="btn-next" className="btn btn-success">Next</button></a>
    </div>
  )
}

export default Formation