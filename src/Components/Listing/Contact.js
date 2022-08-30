import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';


const Contact = () => {
  return (
    <div className='lbox'>
        <div className='row1'>
                <div className='coll1'>
                    <h2>Name</h2>
                    <TextareaAutosize
                        minRows={3}
                        style={{ width: 900 }}
                    />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>Mobile Number</h2>
                    <TextareaAutosize
                        minRows={2}
                        style={{ width: 425 }}
                    />
                </div>
                <div className='coll1'>
                    <h2>Email Id</h2>
                    <TextareaAutosize
                        minRows={2}
                        style={{ width: 425 }}
                    />
                </div>
            </div>

            <div className='row1'>
                <div className='coll1'>
                    <h2>Alternate person’s name</h2>
                    <TextareaAutosize
                        minRows={2}
                        style={{ width: 425 }}
                    />
                </div>
                <div className='coll1'>
                    <h2>Alternate person’s Mobile Number</h2>
                    <TextareaAutosize
                        minRows={2}
                        style={{ width: 425 }}
                    />
                </div>
            </div>
    </div>
  )
}

export default Contact