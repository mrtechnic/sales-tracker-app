import LogIn from './pages/LogIn/LogIn';
import AdminLogin from './pages/adminLogin/adminLogin';
import SuperAdminLogin from './pages/superAdminLogin/SuperAdminLogin';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />}/>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/SuperAdminLogin" element={<SuperAdminLogin />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
