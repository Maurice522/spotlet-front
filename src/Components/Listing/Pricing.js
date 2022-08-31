import React,{useState} from 'react'

const Pricing = () => {
  const [film, setfilm] = useState(0)
  const [tv, settv] = useState(0)
  const [corp, setcorp] = useState(0)
  const [event, setevent] = useState(0)
  return (
    <div className='lbox'>
      <div className='coll1'>
        <h1>Film/ Ad Film/ Web Series Shoot</h1>
      </div>
      <div className='row1'>
        <div className='coll1'>
          <h2>1 hour Rate</h2>
          <input className="input" onChange={(e)=>setfilm(parseInt(e.target.value))} />
        </div>
      </div>
      <div className='row1'>
        <div className='coll1'>
          <h2>4 hour Rate</h2>
          <input className="sminput" disabled value={film*4} />
        </div>
        <div className='coll1'>
          <h2>8 hour Rate</h2>
          <input className="sminput" disabled value={film*8} />
        </div>
        <div className='coll1'>
          <h2>12 hour Rate</h2>
          <input className="sminput" disabled value={film*12} />
        </div>
        <div className='coll1'>
          <h2>24 hour Rate</h2>
          <input className="sminput" disabled value={film*24} />
        </div>
      </div>
      <hr />
      <br />

      <div className='coll1'>
        <h1>TV Series & Other Video Shoot</h1>
      </div>
      <div className='row1'>
        <div className='coll1'>
          <h2>1 hour Rate</h2>
          <input className="input" onChange={(e)=>settv(parseInt(e.target.value))}/>
        </div>
      </div>
      <div className='row1'>
        <div className='coll1'>
          <h2>4 hour Rate</h2>
          <input className="sminput" disabled value={tv*4} />
        </div>
        <div className='coll1'>
          <h2>8 hour Rate</h2>
          <input className="sminput" disabled value={tv*8} />
        </div>
        <div className='coll1'>
          <h2>12 hour Rate</h2>
          <input className="sminput" disabled value={tv*12} />
        </div>
        <div className='coll1'>
          <h2>24 hour Rate</h2>
          <input className="sminput" disabled value={tv*24} />
        </div>
      </div>
      <hr />
      <br />

      <div className='coll1'>
        <h1>Corporate Event</h1>
      </div>
      <div className='row1'>
        <div className='coll1'>
          <h2>1 hour Rate</h2>
          <input className="input" onChange={(e)=>setcorp(parseInt(e.target.value))} />
        </div>
      </div>
      <div className='row1'>
        <div className='coll1'>
          <h2>4 hour Rate</h2>
          <input className="sminput" disabled value={corp*4} />
        </div>
        <div className='coll1'>
          <h2>8 hour Rate</h2>
          <input className="sminput" disabled value={corp*8} />
        </div>
        <div className='coll1'>
          <h2>12 hour Rate</h2>
          <input className="sminput" disabled value={corp*12} />
        </div>
        <div className='coll1'>
          <h2>24 hour Rate</h2>
          <input className="sminput" disabled value={corp*24} />
        </div>
      </div>
      <hr />
      <br />

      <div className='coll1'>
        <h1>Individual Event</h1>
      </div>
      <div className='row1'>
        <div className='coll1'>
          <h2>1 hour Rate</h2>
          <input className="input" onChange={(e)=>setevent(parseInt(e.target.value))} />
        </div>
      </div>
      <div className='row1'>
        <div className='coll1'>
          <h2>4 hour Rate</h2>
          <input className="sminput" disabled value={event*4} />
        </div>
        <div className='coll1'>
          <h2>8 hour Rate</h2>
          <input className="sminput" disabled value={event*8} />
        </div>
        <div className='coll1'>
          <h2>12 hour Rate</h2>
          <input className="sminput" disabled value={event*12} />
        </div>
        <div className='coll1'>
          <h2>24 hour Rate</h2>
          <input className="sminput" disabled value={event*24} />
        </div>
      </div>
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