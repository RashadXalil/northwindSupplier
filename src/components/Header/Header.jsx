import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div className="custom__header">
      <div className="custom__header__left">
        <Link className="custom__header__logo">SUPPLIER.COM</Link>
      </div>
      <div className="custom__header__middle">
        <ul>
          <li>
            <Link className="custom__header__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="custom__header__link" to="/suppliers">
              Suppliers
            </Link>
          </li>
          <li>
            <Link className="custom__header__link" to="/add">
              Add Supplier
            </Link>
          </li>
        </ul>
      </div>
      <div className="custom__header__right">
        <button className="btn btn-secondary ">Login</button>
        <button className="btn btn-primary">Register</button>
      </div>
    </div>
  )
}

export default Header
