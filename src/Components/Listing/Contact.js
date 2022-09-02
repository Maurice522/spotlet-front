import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';


const Contact = () => {
  return (
    <div className='lbox'>
        <div className='row1'>
                <div className='coll1'>
                    <h2>Name</h2>
                    <input className="lginput" />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>Mobile Number</h2>
                    <input className="input" />
                </div>
                <div className='coll1'>
                    <h2>Email Id</h2>
                    <input className="input" />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>Alternate Person’s name</h2>
                    <input className="input" />
                </div>
                <div className='coll1'>
                    <h2>Alternate Mobile Number</h2>
                    <input className="input" />
                </div>
            </div>
    </div>
  )
}

export default Contact