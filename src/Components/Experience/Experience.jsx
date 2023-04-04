import "./Experience.css"
const Experience = () => {
  return (
    <div>
      <div>
        <ul className="list">
          <li className="allExperience">
            <h4><strong>Programador web</strong></h4>
            <span className="site">Freelance</span>
            <span className="date"> 2022 - Actualmente</span>
            <p>Desarrollo de aplicaciones/páginas web/Ecommerce.</p>
          </li>
          <li className="allExperience">
            <h4><strong>Analista de control de calidad</strong></h4>
            <span className="site">Enel Argentina (Edesur)</span>
            <span className="date"> 2023 - Actualmente</span>
            <p>Analisis e implementacion del sistema MLM para solicitudes de inspección de calidad. Capacitación de proveedores y personal de la empresa</p>
          </li>
          <li className="allExperience">
            <h4><strong>Analista de operaciones</strong></h4>
            <span className="site">Interborders SRL (Forwarder)</span>
            <span className="date"> 2022 - 2023</span>
            <p>Organizaba operativamente todas las cargas de importación y exportación provenientes de Asia, gestionando la documentación necesaria para que estas lleguen en tiempo y forma. 
              Encargado de coordinar los trámites pertinentes con las navieras y aerolíneas, a fin de facilitar el traslado de las mercancías. </p>
          </li>
          <li className="allExperience">
            <h4><strong>Coordinador operativo de Comercio Exterior</strong></h4>
            <span className="site">United Logistic Company (Despachante de Aduana)</span>
            <span className="date"> 2019 - 2022</span>
            <p>Coordinacion con maritimas/terminales/depositos fiscales. Manejo de documentación de importaciones/exportaciones/traslados a zonas francas. Trato directo con clientes y forwarders</p>
          </li>
          <li className="allExperience">
            <h4><strong>Auxiliar de logística</strong></h4>
            <span className="site">United Logistic Company (Despachante de Aduana)</span>
            <span className="date"> 2017 - 2019</span>
            <p>Inicie implementando el sistema de coordinación logístico (TMS) y el sistema de deposito (WMS), capacitando al personal de la empresa, 
              luego continue coordinando con deposito, choferes y clientes la entrega de mercaderias, aplicando logistica de distribucion local.</p>
          </li>
          <li className="allExperience">
            <h4><strong>Operador y despachante de mesa de baja tensión y Dibujante de redes electricas</strong></h4>
            <span className="site">Nizza Davidson Ingenieria y Obras. (Edesur)</span>
            <span className="date"> 2014 - 2017</span>
            <p>Analisis de riesgos en via publica, coordinación con cuadrillas y clientes para atencion directa de reclamos y reestablecimiento de servicio.
              Dibujante de planos de redes electricas de la compañia y posterior actualizacion en el sistema CERTA GIS para la visualizacion de las areas indicadas de la empresa.
            </p>
          </li>
          <li className="allExperience">
            <h4><strong>Encargado de deposito de repuestos</strong></h4>
            <span className="site">Rexam Argentina (Actualmente Ball Company)</span>
            <span className="date"> 2013-2014</span>
            <p>Analisis e implementacion del sistema MLM para solicitudes de inspección de calidad. Capacitación de proveedores y personal de la empresa</p>
          </li>
        </ul>
      </div>
      <a href="/knowledge.html"><button id="btn-back" className="btn btn-dark">Back</button></a>
      <a href="/formation.html"><button id="btn-next" className="btn btn-success">Next</button></a>
    </div>
  )
}

export default Experience