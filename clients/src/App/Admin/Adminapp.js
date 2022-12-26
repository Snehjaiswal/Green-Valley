import { Route, Routes } from 'react-router-dom';

import AdminDashboard from '../Admin/Dashboards/Dashboard'
import  Adminprofile from './Profile/Adminprofile'
import Adsellers from './Sellers/Adsellers';
import Adusers from './Users/Adusers';

function Adminapp() {
    return (
        <>


            <Routes>
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/profile" element={<Adminprofile />} />
                <Route path="/sellerslist" element={<Adsellers />} />
                <Route path="/userslist" element={<Adusers />} />

            </Routes>

        </>
    )
}

export default Adminapp