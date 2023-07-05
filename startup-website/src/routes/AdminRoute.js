import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../admin/container/Layout';
import Contact from '../admin/container/Contact';
import Product from '../admin/container/Product';

function AdminRoute(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Product' element={<Product />} />
            </Routes>
        </Layout>
    );
}

export default AdminRoute;