import routesPrivate from "../routes/routes";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-info"
      aria-label="Eighth navbar example"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Mensajes en el foro
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {routesPrivate.filter((r) => r.showLink === true).map((route) =>
              <li key={route.key} className="nav-item active">
                <Link to={route.route} className="nav-link">{route.name}</Link>
              </li>)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;