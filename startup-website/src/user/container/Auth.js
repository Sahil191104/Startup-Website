import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../container/UI/Button/Button';
import Input from './UI/Input/Input';
import Htag from './UI/H1toH6/Htag';

function Auth(props) {
    const [authType, setAuthType] = useState('login');
    const [data, setData] = useState([])
    const navigate = useNavigate()

    let SchemaObj = {}, intial = {}

    if (authType === 'login') {
        SchemaObj = {
            email: Yup.string().email('Please enter your valid email').required('Please enter your email'),
            password: Yup.string().required('Please enter your Password').min(8, "Must Contain 8 Characters")
        }
        intial = {
            email: '',
            password: ''
        }
    } else if (authType === 'signup') {
        SchemaObj = {
            name: Yup.string().required('Please enter your name'),
            email: Yup.string().email('Please enter your valid email').required('Please enter your email'),
            password: Yup.string().required('Please enter your Password').min(8, "Must Contain 8 Characters")
        }
        intial = {
            name: '',
            email: '',
            password: ''
        }
    } else {
        SchemaObj = {
            email: Yup.string().email('Please enter your valid email').required('Please enter your email')
        }
        intial = {
            email: '',
        }
    }

    let userSchema = Yup.object(SchemaObj)

    const handleLogin = () => {
        let data = localStorage.setItem("Loginredirecting", "true")
        navigate("/")
    }

    const handleRegister = () => {

    }
    const handleForget = () => {

    }

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: intial,
        validationSchema: userSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            if (authType === "login") {
                handleLogin()
            } else if (authType === 'signup') {
                handleRegister()
            } else if (authType === 'forgot') {
                handleForget()
            }
            action.resetForm()
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div>
            {/* Navbar Start */}
            <div className="container-fluid position-relative p-0">
                <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-4 text-white animated zoomIn">Login/Signup</h1>
                            <a href className="h5 text-white">Home</a>
                            <i className="far fa-circle text-white px-2" />
                            <a href className="h5 text-white">Login/Signup</a>
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
                <div className="container">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
                        {
                            authType === 'login' ? <Htag name="h1tag">Login</Htag> :
                                authType === 'signup' ? <Htag name="h1tag">Signup</Htag> : <Htag name="h1tag">Forgot Password?</Htag>
                        }
                    </div>
                    <form method="post" role="form" onSubmit={handleSubmit} className="php-email-form">
                        <div className="row justify-content-center">
                            {
                                authType === 'signup' ?
                                    <div className="col-md-7 form-group">
                                        <Input type="text" name="name" id="name" placeholder="Name" value={values.name} onChange={handleChange} onBlur={handleBlur}
                                            errorText={errors.name && touched.name ? errors.name : null}
                                        />
                                        <div className="validate" />
                                    </div> : null
                            }
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <Input type="email" name="email" id="email" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur}
                                    errorText={errors.email && touched.email ? errors.email : null}
                                />
                            </div>
                            {
                                authType === 'forgot' ? null :
                                    <div className="col-md-7 form-group mt-3 mt-md-0">
                                        <Input type="password" name="password" id="password" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur}
                                            errorText={errors.password && touched.password ? errors.password : null}
                                        />
                                    </div>
                            }

                            {/* <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" data-msg="Please enter a valid Password" />
                                <div className="validate" />
                            </div>
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div> */}
                        </div>
                        <br />
                        <div className="text-center mb-2">
                            {
                                authType === 'login' ? <span>You have already account ?<a href="#" onClick={() => setAuthType('signup')}> Sign up</a></span> :
                                    <span>Create a new account ?<a href="#" onClick={() => setAuthType('login')}> Login</a> </span>
                            }
                        </div>
                        <div className="text-center mb-2">
                            {
                                authType === 'login' ? <span><a href="#" onClick={() => setAuthType('forgot')}>Forget Password?</a> </span> :
                                    null
                            }
                        </div>
                        <div className="text-center">
                            {
                                authType === 'login' ? <Button Btndisalbeld={true} type="primary" onClick={handleLogin}>Login</Button> :
                                    authType === 'forgot' ? <Button type="secondry">Conform</Button> : <Button type="outlined">Signup</Button>
                            }
                        </div>
                        <br />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Auth;