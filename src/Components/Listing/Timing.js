import React,{useState} from 'react'
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';


const Timing = () => {
    const [monday, setmonday] = useState(false)
    const [tuesday, settuesday] = useState(false)
  return (
    <div className='lbox'>
        <div className='row1'>
            <h2>Monday</h2>
        <Switch onClick={()=>setmonday(!monday)} color="warning" />
        {monday==false?<h2>Closed</h2>:<h2>Open</h2>}
        {monday==true?<>
            <Checkbox color="warning"/>
            <h2>All Day</h2>
            <Checkbox color="warning"/>
            <h2>Set Hours</h2>
        </>
        : ""}
        </div>
        <div className='row1'>
            <h2>Tuesday</h2>
        <Switch onClick={()=>settuesday(!tuesday)} color="warning" />
        {tuesday==false?<h2>Closed</h2>:<h2>Open</h2>}
        {tuesday==true?<>
            <Checkbox color="warning"/>
            <h2>All Day</h2>
            <Checkbox color="warning"/>
            <h2>Set Hours</h2>
        </>
        : ""}
        </div>
    </div>
  )
}

export default Timing