import { Route, Routes } from 'react-router-dom';

import AdminDashboard from '../Admin/Dashboards/Dashboard'
import Adminprofile from './Profile/Adminprofile'
import Adsellers from './Sellers/Adsellers';
import Adusers from './Users/Adusers';
// import Sidebar from './Sidebar';
import Adproducts from './Products/Adproducts';  


function Adminapp() {
    return (
        <>
            {/* <Sidebar /> */}

            <Routes>
                <Route path="/home" element={<AdminDashboard />} />
                <Route path="/profile" element={<Adminprofile />} />
                <Route path="/sellerslist" element={<Adsellers />} />
                <Route path="/userslist" element={<Adusers />} />
                <Route path="/products" element={<Adproducts />} />


            </Routes>

        </>
    )
}

export default Adminapp