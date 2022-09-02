import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';


const Timing = () => {
    const [monday, setmonday] = useState({
        open: false,
        time: false
    })
    const [tuesday, settuesday] = useState({
        open: false,
        time: false
    })
    const [wednesday, setwednesday] = useState({
        open: false,
        time: false
    })
    const [thursday, setthursday] = useState({
        open: false,
        time: false
    })
    const [friday, setfriday] = useState({
        open: false,
        time: false
    })
    const [saturday, setsaturday] = useState({
        open: false,
        time: false
    })
    const [sunday, setsunday] = useState({
        open: false,
        time: false
    })
    return (
        <div className='lbox'>
            <div className='row1'>
                <h2>Monday</h2>
                <Switch onClick={() => setmonday({ ...monday, open:!monday.open })} color="warning" />
                {monday.open == false ? <h2>Closed</h2> : <h2>Open</h2>}
                {monday.open == true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setmonday({ ...monday, time: false })} name="monday"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setmonday({ ...monday, time: true })} name="monday" /><h2>Set Hours</h2>
                    </div>
                    {monday.time==true ? <>
                        <div className="row1">
                            <input className="input" />
                            <h2> to </h2>
                            <input className="input" />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>
            <div className='row1'>
                <h2>Tuesday</h2>
                <Switch onClick={() => settuesday({ ...tuesday, open:!tuesday.open })} color="warning" />
                {tuesday.open == false ? <h2>Closed</h2> : <h2>Open</h2>}
                {tuesday.open == true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => settuesday({ ...tuesday, time: false })} name="tueday"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => settuesday({ ...tuesday, time: true })} name="tueday" /><h2>Set Hours</h2>
                    </div>
                    {tuesday.time==true ? <>
                        <div className="row1">
                            <input className="input" />
                            <h2> to </h2>
                            <input className="input" />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>

            <div className='row1'>
                <h2>Wednesday</h2>
                <Switch onClick={() => setwednesday({ ...wednesday, open:!wednesday.open })} color="warning" />
                {wednesday.open == false ? <h2>Closed</h2> : <h2>Open</h2>}
                {wednesday.open == true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setwednesday({ ...wednesday, time: false })} name="wed"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setwednesday({ ...wednesday, time: true })} name="wed" /><h2>Set Hours</h2>
                    </div>
                    {wednesday.time==true ? <>
                        <div className="row1">
                            <input className="input" />
                            <h2> to </h2>
                            <input className="input" />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>

            <div className='row1'>
                <h2>Thursday</h2>
                <Switch onClick={() => setthursday({ ...thursday, open:!thursday.open })} color="warning" />
                {thursday.open == false ? <h2>Closed</h2> : <h2>Open</h2>}
                {thursday.open == true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setthursday({ ...thursday, time: false })} name="thrus"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setthursday({ ...thursday, time: true })} name="thrus" /><h2>Set Hours</h2>
                    </div>
                    {thursday.time==true ? <>
                        <div className="row1">
                            <input className="input" />
                            <h2> to </h2>
                            <input className="input" />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>

            <div className='row1'>
                <h2>Friday</h2>
                <Switch onClick={() => setfriday({ ...friday, open:!friday.open })} color="warning" />
                {friday.open == false ? <h2>Closed</h2> : <h2>Open</h2>}
                {friday.open == true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setfriday({ ...friday, time: false })} name="fri"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setfriday({ ...friday, time: true })} name="fri" /><h2>Set Hours</h2>
                    </div>
                    {friday.time==true ? <>
                        <div className="row1">
                            <input className="input" />
                            <h2> to </h2>
                            <input className="input" />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>

            <div className='row1'>
                <h2>Saturday</h2>
                <Switch onClick={() => setsaturday({ ...saturday, open:!saturday.open })} color="warning" />
                {saturday.open == false ? <h2>Closed</h2> : <h2>Open</h2>}
                {saturday.open == true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setsaturday({ ...saturday, time: false })} name="sat"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setsaturday({ ...saturday, time: true })} name="sat" /><h2>Set Hours</h2>
                    </div>
                    {saturday.time==true ? <>
                        <div className="row1">
                            <input className="input" />
                            <h2> to </h2>
                            <input className="input" />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>

            <div className='row1'>
                <h2>Sunday</h2>
                <Switch onClick={() => setsunday({ ...sunday, open:!sunday.open })} color="warning" />
                {sunday.open == false ? <h2>Closed</h2> : <h2>Open</h2>}
                {sunday.open == true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setsunday({ ...sunday, time: false })} name="sun"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setsunday({ ...sunday, time: true })} name="sun" /><h2>Set Hours</h2>
                    </div>
                    {sunday.time==true ? <>
                        <div className="row1">
                            <input className="input" />
                            <h2> to </h2>
                            <input className="input" />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>
        </div>
    )
}

export default Timing