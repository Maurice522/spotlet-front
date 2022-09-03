import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

const Dondont = ({showSection}) => {

    const [do_s, setdo_s] = useState([]);
    const [do1, setdo1] = useState("")

    const HandleChange1 = () => {
        if (!do_s.includes(do1)) {
            setdo_s((prev) => [...prev, do1]);
            document.getElementById('myInput').value = '';

        }
    };
    const [dont_s, setdont_s] = useState([]);
    const [do2, setdo2] = useState("")

    const HandleChange2 = (e) => {
        if (!dont_s.includes(do2)) {
            setdont_s((prev) => [...prev, do2]);
            document.getElementById('myInput1').value = '';

        }
    };
    const deleteoptn1 = (e) => {
        do_s.splice(e, 1);
        setdo_s((prev) => [...prev])
    }
    const deleteoptn2 = (e) => {
        dont_s.splice(e, 1);
        setdont_s((prev) => [...prev])
    }


    return (
        <div className="lbox">
            <div className="row1">
                <div className="coll1">
                    <h2>Do's</h2>
                    <div className="row2">
                        <input className="input" id="myInput" onChange={(e) => setdo1(e.target.value)} />
                        <AddIcon className="add" onClick={HandleChange1} />
                    </div>
                </div>

                <div className="coll1">
                    <h2>Dont's</h2>
                    <div className="row2">
                        <input className="input" id="myInput1" onChange={(e) => setdo2(e.target.value)} />
                        <AddIcon className="add" onClick={HandleChange2} />
                    </div>
                </div>
            </div>
            <div className="row1">
                <div className="coll1">
                    {do_s.map((item, index) => (<>
                        <div className="optns">
                            <div className="optn" key={index}>
                                {item}
                            </div>
                            <ClearIcon onClick={() => deleteoptn1(index)} />
                        </div></>
                    ))}
                </div>
                <br /><br /><br /><br />
                <div className="coll1">
                    {dont_s.map((item, index) => (
                        <><div className="optns">
                            <div className="optn" key={index}>
                                {item}
                            </div>
                            <ClearIcon onClick={() => deleteoptn2(index)} />
                        </div></>
                    ))}
                </div>
            </div>
            <div className='row1'>
                <div className='coll1'>
                    <button className='continue' onClick={() =>{
                        const do_and_dont = {
                            do_s,
                            dont_s
                        }
                        console.log(do_and_dont);
                        showSection("Pricing")
                    }}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Dondont