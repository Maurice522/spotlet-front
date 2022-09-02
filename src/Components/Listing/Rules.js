import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';


const Rules = () => {
	const [rules, setRules] = useState([]);
	const [optn, setoptn] = useState("")
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
  return (
    <div className="lbox">
			<div className="row1">
				<div className="coll1">
					<h2>Rules of the Host</h2>
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
					<button className='continue' onClick={() => console.log(rules)}>Continue</button>
				</div>
			</div>
		</div>
  )
}

export default Rules