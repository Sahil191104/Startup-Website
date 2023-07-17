import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterdicreament, counterincreament } from '../../redux/action/counter.action';

function CounterRedux(props) {
    const dispatch = useDispatch();
    const counteVal = useSelector(state => state.couter);

    const increse = () => {
        dispatch(counterincreament());
    };

    const dicrese = () => {
        dispatch(counterdicreament());
    };

    return (
        <div>
            {/* Navbar Start */}
            <div className="container-fluid position-relative p-0">
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-4 text-white animated zoomIn">Counter</h1>
                            <a href className="h5 text-white">Home</a>
                            <i className="far fa-circle text-white px-2" />
                            <a href className="h5 text-white">Counter</a>
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
            <section id="appointment" className="appointment">
                <div className="container pb-3 mb-5 mx-auto">
                    <div>
                        <button onClick={() => increse()}>+</button>
                        <span>{counteVal.count}</span>
                        <button onClick={() => dicrese()}>-</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CounterRedux;