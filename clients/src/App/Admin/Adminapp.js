import { Route, Routes } from 'react-router-dom';

import AdminDashboard from '../Admin/Dashboards/Dashboard'
import Adminprofile from './Profile/Adminprofile'
import Adsellers from './Sellers/Adsellers';
import Adusers from './Users/Adusers';
import Sidebar from './Sidebar';

function Adminapp() {
    return (
        <>
            {/* <Sidebar /> */}

            <Routes>
                <Route path="/home" element={<AdminDashboard />} />
                <Route path="/profile" element={<Adminprofile />} />
                <Route path="/sellerslist" element={<Adsellers />} />
                <Route path="/userslist" element={<Adusers />} />

            </Routes>

        </>
    )
}

export default Adminapp