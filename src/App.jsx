import LogIn from './pages/LogIn/LogIn';
import AdminLogin from './pages/adminLogin/adminLogin';
import SuperAdminLogin from './pages/superAdminLogin/SuperAdminLogin';
import SuperAdminDash from './Dashboards/superAdminDash';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';


function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />}/>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/SuperAdminLogin" element={<SuperAdminLogin />} />
          <Route path="/superAdminDash" element={<SuperAdminDash />} />  

        </Routes>
      </Router>
      
    </>
  )
}

export default App
