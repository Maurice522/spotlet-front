import React from 'react'
import Select from 'react-select'
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const options = [
  { value: 'Airport', label: 'Airport' },
  { value: 'Amusement Park', label: 'Amusement Park' },
  { value: 'Apartment', label: 'Apartment' }
]


const Details = () => {
  return (
    <div className='lbox'>
      <div className='row1'>
        <div className='coll1'>
          <h2>Type of Location</h2>
          <Select className='locationtype' options={options} />
        </div>
        <div className='coll1'>
          <h2>Property Size in sq ft</h2>
          <input className="input" />
        </div>
      </div>
      <div className='row1'>
        <div className='coll1'>
          <h2>Street Parking Facility Available</h2>
          <div className='row2'>
          <Checkbox /> Yes
          <Checkbox /> No
          </div>
          
        </div>
        <div className='coll1'>
          <h2>Security Camera Available</h2>
          <div className='row2'>
          <Checkbox /> Yes
          <Checkbox /> No
          </div>
        </div>
      </div>
      <div className='row1'>
        <div className='coll1'>
          <h2>Direction Instruction</h2>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={9}
            style={{ width: 690 }}
          />
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

export default Details