import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="d-flex ps-5">
                <img className="pt-2 px-2" src={ require("../img/L.jpg") } alt="L" height="40px"/>
                <a className="navbar-brand" href="/">LegalAI</a>
            </div>
            <div className="collapse navbar-collapse mx-5 ps-5" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active  px-2 text-decoration-underline text-primary" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2" href="/areas">Legal Areas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2" href="/vision">Our Vision</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2" href="/team">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <button type="button" className="btn btn-info px-5 me-5">EN</button>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
  )
}

export default Navbar;
