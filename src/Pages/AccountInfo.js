import React, { useState,useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import '../Assets/Styles/accountsinfo.css'


const AccountInfo = (extraNavId) => {
  const [section, showSection] = useState("Profile")
  const SidebarData = [
    {
      title: "Profile",
      icon: "",
      cName: "nav-text"
    }, {
      title: "Security",
      icon: "",
      cName: "nav-text"
    }, {
      title: "Payment",
      icon: "",
      cName: "nav-text"
    }
  ];
  const handlesection=(e)=>{
  }

  

  return (<>
    <div>
      <Navbar extraNavId={"id-2"} />
      <div className='profcomp'>
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (<>
                <br />
                <li  >
                  <button onClick={console.log("clicked")} className={item.cName}>
                  {/* style={section==="item.title"?{color:"#ff6767"}:""}  */}
                    {item.icon}
                    <h2>{item.title}</h2>
                    <br />
                  </button>
                </li>
                <br />
                <hr
                  style={{
                    color: "black",
                    width: "100%",
                    textAlign: "left"
                  }}
                />
              </>
              );
            })}
          </ul>
        </nav>
        {section==="Profile"?<div className='profr'>
          <form >
          <div className='r1'>
            <img className='accimg' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1660161134~exp=1660161734~hmac=805a827742ed799bfe534923869c5a6c5766070dc2a0e06cb14de86ac6c73743" alt="Avatar" height="100px" width="100px" />
            <button className='accbut'>Edit Photo</button>
          </div>
            <div className='r2'>
              <label>
                <h2>First Name</h2>
                <input className='input' type="text"  size="50"/>
              </label>
              <label>
                <h2>Last Name</h2>
                <input className='input' type="text" size="50" />
              </label>
            </div>
            <div className='r2'>
              <label>
                <h2>Email</h2>
                <input className='input' type="text"  size="50"/>
              </label>
              <label>
                <h2>Phone No</h2>
                <input className='input' type="text" size="50" />
              </label>
            </div>
            <div className='r2'>
              <label>
                <h2>Who Reserves</h2>
                <input className='input' type="text"  size="50"/>
              </label>
              <label>
                <h2>Company Name</h2>
                <input className='input' type="text" size="50" />
              </label>
            </div>
            <div className='r2'>
            <button className='accbut'>Apply Changes</button>
            </div>
          </form>
        </div>:""}
        {section==="Security"?<div className='profr'>
          <form >
          <div className='r1'>
            <h1>Change Password</h1>
          </div>
            <div className='r2'>
              <label>
                <h2>Current Password</h2>
                <input className='input' type="password"  size="50"/>
              </label>
            </div>
            <div className='r2'>
              <label>
                <h2>New Password</h2>
                <input className='input' type="password"  size="50"/>
              </label>
            </div>
            <div className='r2'>
              <label>
                <h2>Confirm Password</h2>
                <input className='input' type="password"  size="50"/>
              </label>
            </div>
            <div className='r2'>
            <button className='accbut'>Update Password</button>
            </div>
          </form>
          <div className='r1de'>Deactivate Your Account:   
          <button className='accbut'>Deactivate Account</button></div>
          
        </div>:""}
      </div>
    </div>
  </>


  )
}

export default AccountInfo