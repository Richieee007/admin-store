import React from 'react'
import './settings.css'
import upload_area from '../../assets/upload_area.svg'


const Settings = () => {
  return (
    <div className='settings'>
      <h1>Settings</h1>
      <div className="settings-list-item">
      <p>Email Address</p>
      <input type='email' name='email' placeholder='Type Here'/>
      </div>
      <div className="settings-list-item">
      <p>Current Password</p>
      <input type='password' name='password' placeholder='Type Here'/>
      </div>
      <div className="settings-list-item">
      <p>New Password</p>
      <input type='password' name='password' placeholder='Type Here'/>
      </div>
      <div className="settings-list-item">
      <p>Repeat New Password</p>
      <input type='password' name='password' placeholder='Type Here'/>
      </div>
      <div className="settings-list-item">
      <label htmlFor='file-input'>
                  <p>User Profile Image</p>
                  <img src={upload_area} alt="" className='addproduct-thumbnail-img' />
                </label>
                <input type='file' name='image' id='file-input' hidden/>
      </div>
      <button className='addproduct-btn'>Change</button>

    </div>
  )
}

export default Settings
