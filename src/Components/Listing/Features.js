import React, { useEffect, useState } from "react";
import Select from 'react-select'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from "react-redux";
import { addLocation, selectLocationData, selectLocationId } from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";


const Features = ({showSection}) => {
    const options = [
        { value: "Location Manager", label: "Location Manager" },
        { value: "Fireplace", label: "Fireplace" },
        { value: "Terrace Garden", label: "Terrace Garden" },
    ];

    const [features, setFeatures] = useState([]);
    const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);

    useEffect(() => {
		location.features && setFeatures(location.features);
	  }, [])

    const HandleChange = (e) => {
        if (!features.includes(e.value)) {
            setFeatures((prev) => [...prev, e.value]);
        }
    };
    const deleteoptn = (e) => {
        features.splice(e, 1);
        setFeatures((prev) => [...prev])
    }

    return (
        <div className="lbox">
            <div className="row1">
                <div className="coll1">
                    <h2>Features</h2>
                    <Select className="select" options={options} onChange={HandleChange} />
                </div>
            </div>
            <div className="row1">
                <div className="coll1">
                    {features.map((item, index) => (
                        <>
                            <div className="optns">
                                <div className="optn" key={index}>
                                    {item}
                                </div>
                                <ClearIcon onClick={() => deleteoptn(index)} />
                            </div>

                        </>
                    ))}
                </div>
            </div>
            <div className='row1'>
                <div className='coll1'>
                    <button className='continue' onClick={async() => {
                        //console.log(features)
                        const locData = {
							...location,
							features
						  }
						  dispatch(addLocation(locData));
						  const form = {
							location_id,
							data : locData
						  }
						   await createTempLocation(form);
                        showSection("Do’s & Don’ts");
                        }}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Features