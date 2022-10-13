import React from "react";

const BankDetails = ({ showSection }) => {
	// const handleChange = (e) => {
	// 		setPropertyDescr({
	// 			...property_desc,
	// 			[e.target.name]: e.target.value,
	// 		});
	// 	};

	return (
		<div class="lbox">
			<div className="row1">
				<div className="coll1">
					<h2>
						Account Holder's Name<span style={{ color: "red" }}>*</span>
					</h2>
					<input
						className="listingInput input"
						name="user_name"
						// onChange={handleChange}
						// value={property_desc.property_size}
						value="User"
						required
					/>
				</div>
			</div>
			<div className="row1">
				<div className="coll1">
					<h2>
						Bank Name<span style={{ color: "red" }}>*</span>
					</h2>
					<input
						className="listingInput input"
						name="bank_name"
						// onChange={handleChange}
						// value={property_desc.property_size}
						value="SBI"
						required
					/>
				</div>
			</div>
			<div className="row1">
				<div className="coll1">
					<h2>
						IFSC Code<span style={{ color: "red" }}>*</span>
					</h2>
					<input
						className="listingInput input"
						name="ifsc_code"
						// onChange={handleChange}
						// value={property_desc.property_size}
						value="XYZ123"
						required
					/>
				</div>
			</div>
			<div className="row1">
				<div className="coll1">
					<h2>
						Account Number<span style={{ color: "red" }}>*</span>
					</h2>
					<input
						className="listingInput input"
						name="a/c_number"
						// onChange={handleChange}
						// value={property_desc.property_size}
						value="1234567890"
						required
					/>
				</div>
			</div>
		</div>
	);
};

export default BankDetails;
