import React, { useEffect, useState } from 'react'
import Select from 'react-select'
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';


const Amenities = () => {
    const options = [
        { value: 'Airport', label: 'Airport' },
        { value: 'Amusement Park', label: 'Amusement Park' },
        { value: 'Apartment', label: 'Apartment' }
    ]

    

    const [selOption, setselOption] = useState()
    const [selData, setselData] = useState([])


    useEffect(() => {
        const arr = selData;
        arr.push(selOption);
        setselData(arr);
        console.log(selData);
        console.log(selOption);   
    }, [selOption])

    return (
        <div className='lbox'>
            <div className='row1'>
                <div className='coll1'>
                    <h2>Amenties</h2>
                    <Select className='locationtype' options={options} onChange={(e)=>setselOption(e.value)} />
                </div>
            </div>
            <div className='coll1'>
                    {console.log(selData)}
                    {selData.map((e) => (
                        e!=undefined ? <div className='options1'>{e}</div> : ""
                    ))}
            </div>
        </div>
    )
}

export default Amenities