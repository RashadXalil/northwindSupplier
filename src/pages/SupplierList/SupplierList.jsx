import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './SupplierList.css'
import { Link } from 'react-router-dom'
const SupplierList = () => {
  const [suppliers, SetSuppliers] = useState([])

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/suppliers').then((res) => {
      SetSuppliers(res.data)
    })
  }, [])

  return (
    <div>
      <h1 className="text-center mt-5">Suppliers</h1>
      <ul className="supplier__list">
        <div className="list__header">
          <div className="list__header__item text-primary">Id</div>
          <div className="list__header__item text-primary">Company Name</div>
          <div className="list__header__item text-primary">Contact Name</div>
          <div className="list__header__item text-primary">Contact Title</div>
        </div>
        {suppliers.map((supplier) => {
          return (
            <li key={supplier.id}>
              <Link className="supplier__item" to={`${supplier.id}`}>
                <div>{supplier.id}</div>
                <div>{supplier.companyName}</div>
                <div>{supplier.contactName}</div>
                <div>{supplier.contactTitle}</div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SupplierList
