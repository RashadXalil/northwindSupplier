import React, { useState } from 'react'
import './AddSupplier.css'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
const AddSupplier = () => {
  const [companyName, setcompanyName] = useState('')
  const [contactName, setcontactName] = useState('')
  const [contactTitle, setcontactTitle] = useState('')

  const addHandler = (e) => {
    axios.post('https://northwind.vercel.app/api/suppliers', {
      companyName: `${companyName}`,
      contactName: `${contactName}`,
      contactTitle: `${contactTitle}`,
    })
    toast.success('supplier created !')
  }
  return (
    <div className="add__wrapper">
      <div className="add__container">
        <div className="brand-logo"></div>
        <div className="brand-title">SUPPLIER.COM</div>
        <div className="inputs">
          <label className="add__label">Company Name</label>
          <input
            className="add__input"
            type="text"
            placeholder="Company Name"
            onChange={(e) => {
              setcompanyName(e.target.value)
            }}
          />
          <label className="add__label">Contact Name</label>
          <input
            className="add__input"
            type="text"
            placeholder="Contact Name"
            onChange={(e) => {
              setcontactName(e.target.value)
            }}
          />
          <label className="add__label">Contact Title</label>
          <input
            className="add__input"
            type="text"
            placeholder="Contact Title"
            onChange={(e) => {
              setcontactTitle(e.target.value)
            }}
          />
          <button
            className="add__button"
            type="submit"
            onClick={() => addHandler()}
          >
            Add
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default AddSupplier
