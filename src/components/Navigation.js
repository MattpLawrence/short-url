import React from "react";

function Navigation(props) {
  const pageNav = props.pageNav;
  const changePage = props.changePage;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">ShortURL</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={
                    pageNav === "About" ? "nav-link active" : "nav-link"
                  }
                  onClick={changePage}
                  name="About"
                >
                  My URLs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    pageNav === "Project" ? "nav-link active" : "nav-link"
                  }
                  onClick={changePage}
                  name="Project"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    pageNav === "Contact" ? "nav-link active" : "nav-link"
                  }
                  onClick={changePage}
                  name="Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
