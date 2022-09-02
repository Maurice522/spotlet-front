import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';


const Location = () => {
    return (
        <div className='lbox'>
            <div className='row1'>
                <div className='coll1'>
                    <h2>Address</h2>
                    <input className="lginput" />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>City</h2>
                    <input className="input" />

                </div>
                <div className='coll1'>
                    <h2>State</h2>
                    <input className="input" />

                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>Country</h2>
                    <input className="input" />
                </div>
                <div className='coll1'>
                    <h2>Pincode</h2>
                    <input className="input" />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>Landmark (optional)</h2>
                    <input className="lginput" />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>Location Details - Map</h2>
                    <input className="lginput" />
                </div>
            </div>
            <div className='row1'>
                <div className='coll1'>
                    <button className='continue'>Continue</button>
                </div>
            </div>

        </div>
    )
}

export default Location