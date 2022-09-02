import React, { useState } from 'react'
import Switch from '@mui/material/Switch';

const Pricing = () => {
  const [film, setfilm] = useState({
    val: 0,
    st: false
  })
  const [tv, settv] = useState({
    val: 0,
    st: false
  })
  const [corp, setcorp] = useState({
    val: 0,
    st: false
  })
  const [event, setevent] = useState({
    val: 0,
    st: false
  })
  return (
    <div className='lbox'>
      <div className='coll1'>
        <div className='row1'>
          <h1>Film/ Ad Film/ Web Series Shoot</h1>
          <Switch onClick={() => setfilm({ ...film, st: !film.st })} color="warning" />
        </div>
      </div>
      {film.st == true ? <><div className='row1'>
        <div className='coll1'>
          <h2>1 hour Rate</h2>
          <input className="input" onChange={(e) => setfilm({ ...film, val: e.target.value })} />
        </div>
      </div>
        <div className='row1'>
          <div className='coll1'>
            <h2>4 hour Rate</h2>
            <input className="sminput" disabled value={film.val * 4} />
          </div>
          <div className='coll1'>
            <h2>8 hour Rate</h2>
            <input className="sminput" disabled value={film.val * 8} />
          </div>
          <div className='coll1'>
            <h2>12 hour Rate</h2>
            <input className="sminput" disabled value={film.val * 12 * 0.9} />
          </div>
          <div className='coll1'>
            <h2>24 hour Rate</h2>
            <input className="sminput" disabled value={film.val * 24 * 0.8} />
          </div>
        </div></> : ""}
      <hr />
      <br />

      <div className='coll1'>
        <div className='row1'>
          <h1>TV Series & Other Video Shoot</h1>
          <Switch onClick={() => settv({ ...tv, st: !tv.st })} color="warning" />
        </div>
      </div>
      {tv.st == true ? <><div className='row1'>
        <div className='coll1'>
          <h2>1 hour Rate</h2>
          <input className="input" onChange={(e) => settv({ ...tv, val: e.target.value })} />
        </div>
      </div>
        <div className='row1'>
          <div className='coll1'>
            <h2>4 hour Rate</h2>
            <input className="sminput" disabled value={tv.val * 4} />
          </div>
          <div className='coll1'>
            <h2>8 hour Rate</h2>
            <input className="sminput" disabled value={tv.val * 8} />
          </div>
          <div className='coll1'>
            <h2>12 hour Rate</h2>
            <input className="sminput" disabled value={tv.val * 12 * 0.9} />
          </div>
          <div className='coll1'>
            <h2>24 hour Rate</h2>
            <input className="sminput" disabled value={tv.val * 24 * 0.8} />
          </div>
        </div></> : ""}
      <hr />
      <br />

      <div className='coll1'>
        <div className='row1'>
          <h1>Corporate Event</h1>
          <Switch onClick={() => setcorp({ ...corp, st: !corp.st })} color="warning" />
        </div>
      </div>
      {corp.st == true ? <><div className='row1'>
        <div className='coll1'>
          <h2>1 hour Rate</h2>
          <input className="input" onChange={(e) => setcorp({ ...corp, val: e.target.value })} />
        </div>
      </div>
        <div className='row1'>
          <div className='coll1'>
            <h2>4 hour Rate</h2>
            <input className="sminput" disabled value={corp.val * 4} />
          </div>
          <div className='coll1'>
            <h2>8 hour Rate</h2>
            <input className="sminput" disabled value={corp.val * 8} />
          </div>
          <div className='coll1'>
            <h2>12 hour Rate</h2>
            <input className="sminput" disabled value={corp.val * 12 * 0.9} />
          </div>
          <div className='coll1'>
            <h2>24 hour Rate</h2>
            <input className="sminput" disabled value={corp.val * 24 * 0.8} />
          </div>
        </div></> : ""}
      <hr />
      <br />

      <div className='coll1'>
        <div className='row1'>
          <h1>Individual Event</h1>
          <Switch onClick={() => setevent({ ...event, st: !event.st })} color="warning" />
        </div>
      </div>
      {event.st == true ? <><div className='row1'>
        <div className='coll1'>
          <h2>1 hour Rate</h2>
          <input className="input" onChange={(e) => setevent({ ...event, val: e.target.value })} />
        </div>
      </div>
        <div className='row1'>
          <div className='coll1'>
            <h2>4 hour Rate</h2>
            <input className="sminput" disabled value={event.val * 4} />
          </div>
          <div className='coll1'>
            <h2>8 hour Rate</h2>
            <input className="sminput" disabled value={event.val * 8} />
          </div>
          <div className='coll1'>
            <h2>12 hour Rate</h2>
            <input className="sminput" disabled value={event.val * 12 * 0.9} />
          </div>
          <div className='coll1'>
            <h2>24 hour Rate</h2>
            <input className="sminput" disabled value={event.val * 24 * 0.8} />
          </div>
        </div></> : ""}
      <hr />
      <div className='row1'>
        <div className='coll1'>
          <button className='continue'>Continue</button>
        </div>
      </div>
    </div>

  )
}

export default Pricing