import React from 'react'
import { Link } from 'react-router-dom'
import "./adminLogin.css"

const AdminLogin = () => {
  return (
    <div>
        <div className="login-container">
        <h2 className="text-center" style={{color: "#f0ad4e"}}>Admin Login</h2>
        <form id="login-form" className="mt-4">
            <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="text" className="form-control" id="username" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
            <div className="text-center mt-3">
                <Link to="#" className="btn btn-link">Forgot Password?</Link>
            </div>
        </form>
        <div className="text-center mt-3">
            <Link to="/" className="btn btn-primary">Staff Login</Link>
            <Link to="/SuperAdminLogin" className="btn btn-danger">Super Admin Login</Link>
        </div>
    </div>
    </div>
  )
}

export default AdminLogin