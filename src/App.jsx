import LogIn from './pages/LogIn/LogIn';
import AdminLogin from './pages/adminLogin/adminLogin';
import SuperAdminLogin from './pages/superAdminLogin/SuperAdminLogin';
import SuperAdminDash from './Dashboards/superAdminDash';
import CreateProduct from './components/CreateProduct';
import ViewProducts from './components/ViewProducts';
import CreateBranch from './components/CreateBranch';
import ViewBranches from './components/ViewBranches';
import CreateInventory from './components/CreateInventory';
import ViewInventory from './components/ViewInventory';
import CreateStaff from './components/CreateStaff';
import ViewStaffs from './components/ViewStaffs';
import Analytics from './components/Analytics';
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
          <Route path="/CreateProduct" element={<CreateProduct />} />
          <Route path="/ViewProducts" element={<ViewProducts />} />
          <Route path="/CreateBranch" element={<CreateBranch />} />
          <Route path="/ViewBranches" element={<ViewBranches />} />
          <Route path="/CreateInventory" element={<CreateInventory />} />
          <Route path="/ViewInventory" element={<ViewInventory />} />
          <Route path="/CreateStaff" element={<CreateStaff />} />
          <Route path="/ViewStaffs" element={<ViewStaffs />} />
          <Route path="/Analytics" element={<Analytics />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
