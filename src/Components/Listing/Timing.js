import React, { useState } from 'react'
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import { createTempLocation } from '../../services/api';
import { addLocation, selectLocationData, selectLocationId } from '../../redux/slices/locationSlice';
import { useDispatch, useSelector } from 'react-redux';


const Timing = ({showSection}) => {
    const [monday, setmonday] = useState({
        open: false,
        isSetHours : false,
        time: ""
    })
    const [tuesday, settuesday] = useState({
        open: false,
        isSetHours : false,
        time: ""
    })
    const [wednesday, setwednesday] = useState({
        open: false,
        isSetHours : false,
        time: ""
    })
    const [thursday, setthursday] = useState({
        open: false,
        isSetHours : false,
        time: ""
    })
    const [friday, setfriday] = useState({
        open: false,
        isSetHours : false,
        time: ""
    })
    const [saturday, setsaturday] = useState({
        open: false,
        isSetHours : false,
        time: ""
    })
    const [sunday, setsunday] = useState({
        open: false,
        isSetHours : false,
        time: ""
    })
    const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const data = useSelector(selectLocationData);
    return (
        <div className='lbox'>
            <div className='row1'>
                <h2>Monday</h2>
                <Switch onClick={() => setmonday({ ...monday, open:!monday.open })} color="warning" />
                {monday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
                {monday.open === true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setmonday({ ...monday, time: "all day", isSetHours : false })} name="monday"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setmonday({ ...monday, isSetHours : true })} name="monday" /><h2>Set Hours</h2>
                    </div>
                    {monday.isSetHours=== true ? <>
                        <div className="row1">
                            <input className="input" onChange={(e) => setmonday({...monday, time : {start : e.target.value}})} />
                            <h2> to </h2>
                            <input className="input" onChange={(e) => setmonday({...monday, time : {...monday.time, end : e.target.value}})} />
                        </div> 
                    </> : ""}
                </>
                    : ""}
            </div>
            <div className='row1'>
                <h2>Tuesday</h2>
                <Switch onClick={() => settuesday({ ...tuesday, open:!tuesday.open })} color="warning" />
                {tuesday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
                {tuesday.open === true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => settuesday({ ...tuesday, time: "all day", isSetHours : false })} name="tueday"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => settuesday({ ...tuesday, isSetHours : true })} name="tueday" /><h2>Set Hours</h2>
                    </div>
                    {tuesday.isSetHours===true ? <>
                        <div className="row1">
                            <input className="input" onChange={(e) => settuesday({...tuesday, time : e.target.value})} />
                            <h2> to </h2>
                            <input className="input" onChange={(e) => settuesday({...tuesday, time : tuesday.time + "-" + e.target.value})}/>
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>

            <div className='row1'>
                <h2>Wednesday</h2>
                <Switch onClick={() => setwednesday({ ...wednesday, open:!wednesday.open })} color="warning" />
                {wednesday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
                {wednesday.open === true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setwednesday({ ...wednesday, time: "all day", isSetHours : false })} name="wed"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setwednesday({ ...wednesday, isSetHours : true })} name="wed" /><h2>Set Hours</h2>
                    </div>
                    {wednesday.isSetHours===true ? <>
                        <div className="row1">
                            <input className="input" onChange={(e) => setwednesday({...wednesday, time : e.target.value})}/>
                            <h2> to </h2>
                            <input className="input" onChange={(e) => setwednesday({...wednesday, time : wednesday.time + "-" + e.target.value})} />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>

            <div className='row1'>
                <h2>Thursday</h2>
                <Switch onClick={() => setthursday({ ...thursday, open:!thursday.open })} color="warning" />
                {thursday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
                {thursday.open === true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setthursday({ ...thursday, time: "all day", isSetHours : false })} name="thrus"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setthursday({ ...thursday, isSetHours : true })} name="thrus" /><h2>Set Hours</h2>
                    </div>
                    {thursday.isSetHours===true ? <>
                        <div className="row1" onChange={(e) => setthursday({...thursday, time : e.target.value})}>
                            <input className="input" />
                            <h2> to </h2>
                            <input className="input" onChange={(e) => setthursday({...thursday, time : thursday.time + "-" + e.target.value})} />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>

            <div className='row1'>
                <h2>Friday</h2>
                <Switch onClick={() => setfriday({ ...friday, open:!friday.open })} color="warning" />
                {friday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
                {friday.open === true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setfriday({ ...friday, time: "all day", isSetHours : false })} name="fri"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setfriday({ ...friday, isSetHours : true })} name="fri" /><h2>Set Hours</h2>
                    </div>
                    {friday.isSetHours===true ? <>
                        <div className="row1">
                            <input className="input" onChange={(e) => setfriday({...friday, time : e.target.value})} />
                            <h2> to </h2>
                            <input className="input" onChange={(e) => setfriday({...friday, time : friday.time + "-" + e.target.value})} />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>

            <div className='row1'>
                <h2>Saturday</h2>
                <Switch onClick={() => setsaturday({ ...saturday, open:!saturday.open })} color="warning" />
                {saturday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
                {saturday.open === true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setsaturday({ ...saturday, time: "all day", isSetHours : false })} name="sat"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setsaturday({ ...saturday, isSetHours : true })} name="sat" /><h2>Set Hours</h2>
                    </div>
                    {saturday.isSetHours===true ? <>
                        <div className="row1">
                            <input className="input" onChange={(e) => setsaturday({...saturday, time : e.target.value})}/>
                            <h2> to </h2>
                            <input className="input" onChange={(e) => setsaturday({...saturday, time : saturday.time + "-" + e.target.value})} />
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>

            <div className='row1'>
                <h2>Sunday</h2>
                <Switch onClick={() => setsunday({ ...sunday, open:!sunday.open })} color="warning" />
                {sunday.open === false ? <h2>Closed</h2> : <h2>Open</h2>}
                {sunday.open === true ? <>
                    <div className='row2'>
                        <input type="radio" className='radio' onClick={() => setsunday({ ...sunday, time: "all day", isSetHours : false })} name="sun"/><h2>All Day</h2>
                        <input type="radio" className='radio' onClick={() => setsunday({ ...sunday, isSetHours : true })} name="sun" /><h2>Set Hours</h2>
                    </div>
                    {sunday.isSetHours!=="all day"  ? <>
                        <div className="row1">
                            <input className="input" onChange={(e) => setsunday({...sunday, time : e.target.value})} />
                            <h2> to </h2>
                            <input className="input" onChange={(e) => setsunday({...sunday, time : sunday.time + "-" + e.target.value})}/>
                        </div>
                    </> : ""}
                </>
                    : ""}
            </div>
            <button className='continue' onClick={async() => {
                        const timings = {
                            monday,
                            tuesday,
                            wednesday,
                            thursday,
                            friday,
                            saturday,
                            sunday
                        }
                        //console.log(timings);
                        const locData = {
                            ...data,
                            timings
                          }
                          dispatch(addLocation(locData));
                          const form = {
                            location_id,
                            data : locData
                          }
                           await createTempLocation(form);
						showSection("Rules of the Host");
						}}>Continue</button>
        </div>
    )
}

export default Timing