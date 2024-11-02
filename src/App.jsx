import React from 'react';
import LogIn from './pages/LogIn/LogIn';
import AdminLogin from './pages/adminLogin/adminLogin';
import SuperAdminLogin from './pages/superAdminLogin/SuperAdminLogin';
import SuperAdminDash from './Dashboards/superAdminDash';
import ViewSalesRecords from './components/ViewSalesRecords';
import CreateProduct from './components/CreateProduct';
import ViewProducts from './components/ViewProducts';
import CreateBranch from './components/CreateBranch';
import ViewBranches from './components/ViewBranches';
import CreateInventory from './components/CreateInventory';
import ViewInventory from './components/ViewInventory';
import CreateStaff from './components/CreateStaff';
import ViewStaffs from './components/ViewStaffs';
import Analytics from './components/Analytics';
import StaffDashboard from './Dashboards/StaffDashboard';
import StaffRecordPage from './components/StaffRecordPage';
import ViewSalesRecord from './components/ViewSalesRecord';
import CreateInventoryStaff from './components/CreateInventoryStaff';
import StaffViewInventory from './components/StaffViewInventory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/superAdminLogin" element={<SuperAdminLogin />} />
        <Route path="/superAdminDash" element={<SuperAdminDash />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/viewProducts" element={<ViewProducts />} />
        <Route path="/createBranch" element={<CreateBranch />} />
        <Route path="/viewBranches" element={<ViewBranches />} />
        <Route path="/createInventory" element={<CreateInventory />} />
        <Route path="/viewInventory" element={<ViewInventory />} />
        <Route path="/createStaff" element={<CreateStaff />} />
        <Route path="/viewStaffs" element={<ViewStaffs />} />
        <Route path="/viewSalesRecords" element={<ViewSalesRecords />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/StaffDashboard" element={<StaffDashboard />} />
        <Route path="/StaffRecordPage" element={<StaffRecordPage />} />
        <Route path="/ViewSalesRecord" element={<ViewSalesRecord branchName="Branch A" staffName="Mikasa Ackerman"/>} />
        <Route path="/CreateInventoryStaff" element={<CreateInventoryStaff />} />
        <Route path="/StaffViewInventory" element={<StaffViewInventory />} />

      </Routes>
    </Router>
  );
}

export default App;
