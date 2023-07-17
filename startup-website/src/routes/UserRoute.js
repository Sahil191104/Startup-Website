import React from 'react';
import Header from '../user/components/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from '../user/components/Footer';
import Home from '../user/container/Home';
import About from '../user/container/About';
import Services from '../user/container/Services';
import BlogGrid from '../user/container/BlogGrid';
import BlogDeatils from '../user/container/BlogDeatils';
import Feature from '../user/container/Feature';
import Price from '../user/container/Price';
import Team from '../user/container/Team';
import Testimonial from '../user/container/Testimonial';
import Quote from '../user/container/Quote';
import Contact from '../user/container/Contact';
import Auth from '../user/container/Auth';
import { Provider } from 'react-redux';
import { configstore } from '../redux/Store';
import CounterRedux from '../user/container/CounterRedux';

function UserRoute(props) {

    const store = configstore();

    return (
        <>
            <Header />
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/blog' element={<BlogGrid />} />
                    <Route path='/detail' element={<BlogDeatils />} />
                    <Route path='/feature' element={<Feature />} />
                    <Route path='/price' element={<Price />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/testimonial' element={<Testimonial />} />
                    <Route path='/quote' element={<Quote />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/Auth' element={<Auth />} />
                    <Route path='/counter' element={<CounterRedux />} />
                </Routes>
            </Provider>
            <Footer />
        </>
    );
}

export default UserRoute;