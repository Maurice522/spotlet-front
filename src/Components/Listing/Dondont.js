import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

const Dondont = () => {

    const [dos, setdos] = useState([]);
    const [do1, setdo1] = useState("")

    const HandleChange1 = () => {
        if (!dos.includes(do1)) {
            setdos((prev) => [...prev, do1]);
            document.getElementById('myInput').value = '';

        }
    };
    const [donts, setdonts] = useState([]);
    const [do2, setdo2] = useState("")

    const HandleChange2 = (e) => {
        if (!donts.includes(do2)) {
            setdonts((prev) => [...prev, do2]);
            document.getElementById('myInput').value = '';

        }
    };
    const deleteoptn1 = (e) => {
        dos.splice(e, 1);
        setdos((prev) => [...prev])
    }
    const deleteoptn2 = (e) => {
        donts.splice(e, 1);
        setdonts((prev) => [...prev])
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
                        <input className="input" id="myInput" onChange={(e) => setdo2(e.target.value)} />
                        <AddIcon className="add" onClick={HandleChange2} />
                    </div>
                </div>
            </div>
            <div className="row1">
                <div className="coll1">
                    {dos.map((item, index) => (<>
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
                    {donts.map((item, index) => (
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
                    <button className='continue'>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Dondont