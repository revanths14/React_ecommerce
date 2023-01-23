import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Webdesign.css';




export default function Navbar() {
  const state = useSelector((state)=> state.handleCarts);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <Link className="navbar-brand fw-bold fs-4" to="/">
        RS COLLECTION
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          < Link className="nav-link active" aria-current="page" to="/">
            Home
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">
            Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Contact</Link>
        </li>
      </ul>
      <div className='buttons'>
             <Link to="/login" className="btn btn-outline-dark">
             <i class="fa fa-sign-in" ></i>Login</Link>
                <Link  to="/register" className="btn btn-outline-dark ms-2">
                <i class="fa fa-user-plus"></i>Register</Link>
                <Link to="/cart"  className="btn btn-outline-dark ms-2">
                <i class="fa fa-sign-in"></i>Cart (0)</Link>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
