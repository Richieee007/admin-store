import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
import settings_icon from '../../assets/settings.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-items">
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
        <div className="sidebar-item">
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div>
        </Link>
        <Link to={'/settings'} style={{textDecoration:'none'}}>
        <div className="sidebar-item">
            <img src={settings_icon} alt="" />
            <p>Settings</p>
        </div>
        </Link>
         </div>
        <Link to={'/'} style={{textDecoration:'none'}}>
        <div className="sidebar-item homepage-btn">
            <img src={settings_icon} alt="" />
            <p>Home Page</p>
        </div>
        </Link>

      
    </div>
  )
}

export default Sidebar
