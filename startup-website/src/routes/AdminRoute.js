import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../admin/container/Layout';
import Contact from '../admin/container/Contact';
import ShopCart from '../admin/container/ShopCart';

function AdminRoute(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/Contact' element={<Contact />} />
                <Route path='/ShopCart' element={<ShopCart />} />
            </Routes>
        </Layout>
    );
}

export default AdminRoute;