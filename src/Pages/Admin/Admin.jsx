import React from 'react'
import './admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Settings from '../../Components/Settings/Settings'

const Admin = () => {
  return (
    <div className='admin'>
        
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/listproduct' element={<ListProduct/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>

      {/* <h1>Admin Panel Pages</h1> */}
    </div>
  )
}

export default Admin
