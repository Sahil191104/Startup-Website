import React, { useState } from 'react';

function Feature(props) {
    return (
        <>
            <div>
                {/* Navbar Start */}
                <div className="container-fluid position-relative p-0">
                    <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
                        <div className="row py-5">
                            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                                <h1 className="display-4 text-white animated zoomIn">Features</h1>
                                <a href className="h5 text-white">Home</a>
                                <i className="far fa-circle text-white px-2" />
                                <a href className="h5 text-white">Features</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navbar End */}
                {/* Full Screen Search Start */}
                <div className="modal fade" id="searchModal" tabIndex={-1}>
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
                            <div className="modal-header border-0">
                                <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body d-flex align-items-center justify-content-center">
                                <div className="input-group" style={{ maxWidth: 600 }}>
                                    <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                                    <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Full Screen Search End */}
                {/* Features Start */}
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                            <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                            <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-4">
                                <div className="row g-5">
                                    <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                            <i className="fa fa-cubes text-white" />
                                        </div>
                                        <h4>Best In Industry</h4>
                                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                    </div>
                                    <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                            <i className="fa fa-award text-white" />
                                        </div>
                                        <h4>Award Winning</h4>
                                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: 350 }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="img/feature.jpg" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row g-5">
                                    <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                            <i className="fa fa-users-cog text-white" />
                                        </div>
                                        <h4>Professional Staff</h4>
                                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                    </div>
                                    <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                            <i className="fa fa-phone-alt text-white" />
                                        </div>
                                        <h4>24/7 Support</h4>
                                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Features Start */}
                {/* Vendor Start */}
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5 mb-5">
                        <div className="bg-white">
                            <div className="owl-carousel vendor-carousel">
                                <img src="img/vendor-1.jpg" alt />
                                <img src="img/vendor-2.jpg" alt />
                                <img src="img/vendor-3.jpg" alt />
                                <img src="img/vendor-4.jpg" alt />
                                <img src="img/vendor-5.jpg" alt />
                                <img src="img/vendor-6.jpg" alt />
                                <img src="img/vendor-7.jpg" alt />
                                <img src="img/vendor-8.jpg" alt />
                                <img src="img/vendor-9.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Vendor End */}
            </div>
        </>
    );
}

export default Feature;