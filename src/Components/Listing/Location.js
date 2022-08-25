import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';


const Location = () => {
    return (
        <div className='lbox'>
            <div className='row1'>
                <div className='coll1'>
                    <h2>Address</h2>
                    <TextareaAutosize
                        minRows={3}
                        style={{ width: 900 }}
                    />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>City</h2>
                    <TextareaAutosize
                        minRows={2}
                        style={{ width: 425 }}
                    />
                </div>
                <div className='coll1'>
                    <h2>State</h2>
                    <TextareaAutosize
                        minRows={2}
                        style={{ width: 425 }}
                    />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>Country</h2>
                    <TextareaAutosize
                        minRows={2}
                        style={{ width: 425 }}
                    />
                </div>
                <div className='coll1'>
                    <h2>Pincode</h2>
                    <TextareaAutosize
                        minRows={2}
                        style={{ width: 425 }}
                    />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>Landmark (optional)</h2>
                    <TextareaAutosize
                        minRows={3}
                        style={{ width: 900 }}
                    />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>Location Details - Map</h2>
                    <TextareaAutosize
                        minRows={3}
                        style={{ width: 900 }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Location