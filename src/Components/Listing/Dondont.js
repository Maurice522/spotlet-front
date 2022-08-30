import React, { useState } from "react";
import Select from 'react-select'

const Dondont = () => {
    const dosOptions = [
        { value: "Airport", label: "Airport" },
        { value: "Amusement Park", label: "Amusement Park" },
        { value: "Apartment", label: "Apartment" },
    ];
    const dontOptions = [
        { value: "Airport", label: "Airport" },
        { value: "Amusement Park", label: "Amusement Park" },
        { value: "Apartment", label: "Apartment" },
    ];


    const [dos, setdos] = useState([]);
    const HandleChange1 = (e) => {
        if (!dos.includes(e.value)) {
            setdos((prev) => [...prev, e.value]);
        }
    };
    const [donts, setdonts] = useState([]);
    const HandleChange2 = (e) => {
        if (!donts.includes(e.value)) {
            setdonts((prev) => [...prev, e.value]);
        }
    };


    return (
        <div className="lbox">
            <div className="row1">
                <div className="coll1">
                    <h2>Do's</h2>
                    <Select className="select" options={dosOptions} onChange={HandleChange1} />
                </div>
                <div className="coll1">
                    <h2>Dont's</h2>
                    <Select className="select" options={dontOptions} onChange={HandleChange2} />
                </div>
            </div>
            <div className="row1">
                <div className="coll1">
                    {dos.map((item, index) => (
                        <div className="optn" key={index}>{item}</div>
                    ))}
                </div>
                <div className="coll1">
                    {donts.map((item, index) => (
                        <div className="optn" key={index}>{item}</div>
                    ))}
                </div>
            </div>
            <div className='row1'>
                <div className='coll1'>
                    <button className='continue'>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Dondont