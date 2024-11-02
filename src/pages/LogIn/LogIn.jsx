import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!email || !password){
            setError('please fill in all fields.');
            return;
        }
    setLoading(true);
        // setError('');

    // try{
    //     console.log('sending request to API....');
    //     const response = await fetch('/api/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify({email, password}),
    //     });

    //     if (response.ok){
    //         const data = await response.json();

    //         localStorage.setItem('authToken', data.token);
    //         navigate('/dashboard');
    //     } else {
    //         setError('Invalid email or password.');
    //     }
    // } catch (err) {
    //     setError('Network error, please try again later.');
    // } finally{
    //     setLoading(false);
    // }

    setTimeout(() =>{
        setLoading(false);
        navigate('/StaffDashboard');
    }, 1000);
    };

  return (
    <div>
        <div className="login-container">
        <h2 className="text-center" style={{color: "blue"}}>Staff Login</h2>
        <form id="login-form" className="mt-4" onSubmit={handleSubmit} >
            <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="text" className="form-control" id="username" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {error && <div className="text-danger text-center">{error}</div>}
            <div className="text-center">
            <button type="submit" className="super-admin-btn" style={{color: 'white', backgroundColor: 'blue', border: 'none', height: '40px', width: '30%', borderRadius: '5px'}} disabled={loading}> {loading ? 'Signing In...' : 'Sign In'}</button>
            </div>
            <div className="text-center mt-3">
                <Link to="#" className="btn btn-link">Forgot Password?</Link>
            </div>
        </form>
        <div className="text-center mt-3">
            <div className="super-log"><Link to="/SuperAdminLogin" style={{backgroundColor: 'red', color: 'white', height: '40px', padding: '5px', borderRadius: '5px'}}>Super Admin Login</Link></div>
            {/* <div><Link to="/admin-login" className="btn btn-warning">Admin Login</Link></div>  */}
        </div>
    </div>
    </div>
  )
}

export default LogIn