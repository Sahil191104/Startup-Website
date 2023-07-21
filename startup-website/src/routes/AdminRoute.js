import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../admin/container/Layout';
import Contact from '../admin/container/Contact';
import Product from '../admin/container/Product';
import Employee from '../admin/container/Employee';
import { configstore } from '../redux/Store';
import { Provider } from 'react-redux';

function AdminRoute(props) {
    const store = configstore();

    return (
        <Layout>
            <Provider store={store}>
                <Routes>
                    <Route path='/Employee' element={<Employee />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Product' element={<Product />} />
                </Routes>
            </Provider>
        </Layout>
    );
}

export default AdminRoute;