import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            {/* Spinner Start */}
            {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner" />
            </div> */}
            {/* Spinner End */}
            
            {/* Topbar Start */}
            {/* <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2" />Location, City, Country</small>
                            <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+012 345 6789</small>
                            <small className="text-light"><i className="fa fa-envelope-open me-2" />info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://freewebsitecode.com/"><i className="fab fa-twitter fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://facebook.com/freewebsitecode/"><i className="fab fa-facebook-f fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://freewebsitecode.com/"><i className="fab fa-linkedin-in fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://freewebsitecode.com/"><i className="fab fa-instagram fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="https://youtube.com/freewebsitecode/"><i className="fab fa-youtube fw-normal" /></a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Topbar End */}

            {/* Navbar Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    <a href="index.html" className="navbar-brand p-0">
                        <h1 className="m-0"><i className="fa fa-user-tie me-2" />Startup</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <li><Link to="/" className="nav-item nav-link active" >Home</Link></li>
                            <li><Link to="/about" className="nav-item nav-link">About</Link></li>
                            <li><Link to="/services" className="nav-item nav-link">Services</Link></li>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu m-0">
                                    <li><Link to="/blog" className="dropdown-item">Blog Grid</Link></li>
                                    <li><Link to="/detail" className="dropdown-item">Blog Detail</Link></li>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <li><Link to="/price" className="dropdown-item">Pricing Plan</Link></li>
                                    <li><Link to="/feature" className="dropdown-item">Our features</Link></li>
                                    <li><Link to="/team" className="dropdown-item">Team Members</Link></li>
                                    <li><Link to="/testimonial" className="dropdown-item">Testimonial</Link></li>
                                    <li><Link to="/quote" className="dropdown-item">Free Quote</Link></li>
                                </div>
                            </div>
                            <li><Link to="/contact" className="nav-item nav-link">Contact</Link></li>
                            <li><Link to="/counter" className="nav-item nav-link">Counter</Link></li>
                        </div>
                        <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search" /></butaton>
                        <Link to="/Auth"><a href className="btn btn-primary py-2 px-4 ms-3">Login/SignUp</a></Link>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
        </>
    );
}

export default Header;