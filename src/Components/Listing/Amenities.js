import React, { useEffect, useState } from "react";
import Select from 'react-select'
import ClearIcon from '@mui/icons-material/Clear';


const Amenities = () => {
	const options = [
		{ value: "Airport", label: "Airport" },
		{ value: "Amusement Park", label: "Amusement Park" },
		{ value: "Apartment", label: "Apartment" },
	];

	const [selOption, setselOption] = useState([]);
	const HandleChange = (e) => {
		if (!selOption.includes(e.value)) {
			setselOption((prev) => [...prev, e.value]);
		}
	};
	const deleteoptn = (e) => {
		selOption.splice(e, 1);
		setselOption((prev) => [...prev])
	}

	return (
		<div className="lbox">
			<div className="row1">
				<div className="coll1">
					<h2>Amenties</h2>
					<Select className="select" options={options} onChange={HandleChange} />
				</div>
			</div>
			<div className="row1">
				<div className="coll1">
					{selOption.map((item, index) => (
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
		</div>
	);
};

export default Amenities;
