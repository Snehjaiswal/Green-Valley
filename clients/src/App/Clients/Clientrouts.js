import { Route, Routes } from 'react-router-dom';
import Clientdashboard from './Dashboard/Sellerdashboard'

function Clientrouts() {
    return (
        <>


            <Routes>
                <Route path="/dashboard" element={<Clientdashboard />} />
                {/* <Route path="/profile" element={<Adminprofile />} /> */}

            </Routes>



        </>
    )
}

export default Clientrouts