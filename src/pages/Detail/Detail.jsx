import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

import './Detail.css'
const Detail = (props) => {
  let { id } = useParams()
  const [supplier, setSupplier] = useState({})

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/suppliers/${id}`)
      .then((res) => setSupplier(res.data))
  }, [])
  const deleteHandler = () => {
    axios
      .delete(`https://northwind.vercel.app/api/suppliers/${id}`)
      .then(function () {
        window.location.href = 'http://localhost:3000/suppliers'
        toast.success('supplier deleted !')
      })
  }
  return (
    <div className="app__detail">
      <h3>Id : {supplier.id}</h3>
      <h3>companyName : {supplier.companyName}</h3>
      <h3>contactName : {supplier.contactName}</h3>
      <h3>contactTitl : {supplier.contactTitle}</h3>
      <button
        className="btn btn-danger text-ligt"
        onClick={() => deleteHandler()}
      >
        Delete
      </button>
      <Toaster />
    </div>
  )
}

export default Detail
