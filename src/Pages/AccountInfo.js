import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import '../Assets/Styles/accountsinfo.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';






const AccountInfo = (extraNavId) => {
  const [section, showSection] = useState("Profile")
  const handlesection = (e) => {
    showSection(e)
  }

  return (<>
    <div className='accounts'>
      <Navbar extraNavId={"id-2"} />
      <div className='profcomp'>
        <nav className={"nav-menu active"}>
          <div className="nav-menu-items">
            <div>
              <button onClick={() => handlesection("Profile")} className={section === "Profile" ? "nav-text sel" : "nav-text"}>
                Profile
              </button>

              <hr />
            </div>
            <div>
              <button onClick={() => handlesection("Security")} className={section === "Security" ? "nav-text sel" : "nav-text"}>
                Security
              </button>

              <hr />
            </div>
            <div>
              <button onClick={() => handlesection("Payments")} className={section === "Payments" ? "nav-text sel" : "nav-text"}>
                Payments
              </button>

              <hr />
            </div>
          </div>
        </nav>
        {/* Profile Section  */}
        {section === "Profile" ? <div className='profr'>
          <form >
            <div className='r1'>
              <img className='accimg' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1660161134~exp=1660161734~hmac=805a827742ed799bfe534923869c5a6c5766070dc2a0e06cb14de86ac6c73743" alt="Avatar" height="100px" width="100px" />
              <button className='accbut'>Edit Photo</button>
            </div>
            <div className='r2'>
              <label>
                <h2>First Name</h2>
                <input className='input' type="text" size="50" />
              </label>
              <label>
                <h2>Last Name</h2>
                <input className='input' type="text" size="50" />
              </label>
            </div>
            <div className='r2'>
              <label>
                <h2>Email</h2>
                <input className='input' type="text" size="50" />
              </label>
              <label>
                <h2>Phone No</h2>
                <input className='input' type="text" size="50" />
              </label>
            </div>
            <div className='r2'>
              <label>
                <h2>Who Reserves</h2>
                <input className='input' type="text" size="50" />
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
        </div> : ""}

        {/* Security Section  */}
        {section === "Security" ? <div className='profr'>
          <form >
            <div className='r1'>
              <h1>Change Password</h1>
            </div>
            <div className='r2'>
              <label>
                <h2>Current Password</h2>
                <input className='input' type="password" size="50" />
              </label>
            </div>
            <div className='r2'>
              <label>
                <h2>New Password</h2>
                <input className='input' type="password" size="50" />
              </label>
            </div>
            <div className='r2'>
              <label>
                <h2>Confirm Password</h2>
                <input className='input' type="password" size="50" />
              </label>
            </div>
            <div className='r2'>
              <button className='accbut'>Update Password</button>
            </div>
          </form>
          <div className='r1de'>Deactivate Your Account:
            <button className='accbut'>Deactivate Account</button></div>

        </div> : ""}

        {/* Payments Section  */}
        {section === "Payments" ?
          <div className='profr'>
            <h1>Payments</h1>
            <br />
            <Accordion >
              <AccordionSummary
                sx={{ height: 100 }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography><h1>Saved Cards</h1></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 24 }} >
                        ICICI Credit Card
                      </Typography>
                      <Typography variant="h5" component="div">
                        **** **** **** 6666
                        <br />
                        Saket Mundra
                      </Typography>
                      <Typography>
                        <h2>CVV</h2>
                        <input style={{width: "100px",height: "28px"}} type="text" />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <button size="small" className='accbut'>Pay Now</button>
                    </CardActions>
                  </Card>

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                sx={{ height: 100 }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography><h1>Credit/Debit Cards</h1></Typography>
              </AccordionSummary>
              <AccordionDetails sx={{
                fontWeight: "400",
                fontSize: "20px",
              }}>
                <Typography>
                  <div className='accprofr'>
                    <form>
                      <div className='r2'>
                        <label>
                          <h2>Card Number</h2>
                          <input className='input' type="text" size="50" />
                        </label>
                        <label>
                          <h2>Name on the Card</h2>
                          <input className='input' type="text" size="50" />
                        </label>
                      </div>
                      <div className='r2'>
                        <label>
                          <h2>Valid Thru (MM/YY)</h2>
                          <input className='input' type="text" size="50" />
                        </label>
                        <label>
                          <h2>CVV</h2>
                          <input className='input' type="text" size="50" />
                        </label>
                      </div>
                      <div className='r2'>
                        <button className='accbut'>Pay Now</button>
                      </div>
                    </form>
                  </div>
                </Typography>

              </AccordionDetails>
            </Accordion>
            <Accordion  >
              <AccordionSummary
                sx={{ height: 100 }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography><h1>UPI</h1></Typography>
              </AccordionSummary>
              <AccordionDetails sx={{
                fontWeight: "400",
                fontSize: "20px",
              }}>
                <Typography>
                  <div className='accprofr'>
                    <form>
                      <div style={{ marginBottom: "12px" }}>
                        <label>
                          <h2>UPI ID</h2>
                          <input className='input' type="text" size="50" />
                        </label>
                      </div>
                      <button className='accbut'>Pay Now</button>
                    </form>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div> : ""}
      </div>
    </div>
  </>


  )
}

export default AccountInfo