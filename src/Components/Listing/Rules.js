import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from "react-redux";
import { addLocation, selectLocationData, selectLocationId } from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { toast } from "react-toastify";


const Rules = ({showSection}) => {
	const [rules, setRules] = useState([]);
	const [optn, setoptn] = useState("")
	const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);

	useEffect(() => {
		location?.rules && setRules(location.rules);
	  }, [])

	const HandleChange = () => {
		if (!rules.includes(optn)){
			setRules((prev) => [...prev,optn]);
			document.getElementById('myInput').value='';
		}
	};
	const deleteoptn = (e) => {
		rules.splice(e, 1);
		setRules((prev) => [...prev])
	}
	const handleSubmit = async(e) => {
		if(!rules.length)
			return toast.error("Please fill all required fields");
		const locData = {
			...location,
			rules
		  }
		  dispatch(addLocation(locData));
		  const form = {
			location_id,
			data : locData
		  }
		  try {
			await createTempLocation(form);
			showSection("Contact Details");
		  } catch (error) {
			toast.error(error.response.data);
		  }
	}
  return (
    <div className="lbox">
			<div className="row1">
				<div className="coll1">
					<h2>Rules of the Host<span style={{color : "red"}}>*</span></h2>
					<div className="row2">
                    <input className="input" id="myInput" onChange={(e)=>setoptn(e.target.value)} />
                    <AddIcon className="add" onClick={HandleChange}/>
                    </div>
				</div>
			</div>
			<div className="row1">
				<div className="coll1">
					{rules.map((item, index) => (
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
					<button className='continue' onClick={handleSubmit}>Continue</button>
				</div>
			</div>
		</div>
  )
}

export default Rules