import React, { useState } from "react";
import { toast } from "react-toastify";
import {
	addLocation,
	selectLocationData,
	selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";

const BankDetails = ({ showSection, changeSection }) => {

	const [bankDetails, setbankDetails] = useState({
		account_holder_name: "",
		bank_name: "",
		ifsc_code: "",
		account_number: "",
	});

	const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);
	console.log(location)

	const handleChange = (e) => {
		setbankDetails({
			...bankDetails,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		console.log(bankDetails)
		if (!bankDetails.account_holder_name.length || !bankDetails.account_number.length || !bankDetails.bank_name.length || !bankDetails.ifsc_code.length)
			return toast.error("Please fill all required fields!!!")
		const locData = {
			...location,
			bankDetails
		}
		dispatch(addLocation(locData));
		const form = {
			location_id,
			data: locData
		}
		try {
			await createTempLocation(form);
			showSection("Terms & Conditions");
		} catch (error) {
			toast.error(error.response.data);
		}

		changeSection("Review Application");
		window.scrollTo(0, 0);
	}


	return (
		<div class="lbox">
			<div className="row1">
				<div className="coll1">
					<h2>
						Account Holder's Name<span style={{ color: "red" }}>*</span>
					</h2>
					<input
						className="listingInput input"
						name="account_holder_name"
						type="text"
						onChange={handleChange}
						value={bankDetails.account_holder_name}
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
						type="text"
						onChange={handleChange}
						value={bankDetails.bank_name}
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
						type="text"
						onChange={handleChange}
						value={bankDetails.ifsc_code}
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
						name="account_number"
						type="number"
						onChange={handleChange}
						value={bankDetails.account_number}
						required
					/>
				</div>
			</div>

			<div className="row1">
				<div className="coll1">
					<button
						className="bankContinue continue"
						onClick={handleSubmit}
					>
						Continue
					</button>
				</div>
			</div>

		</div>
	);
};

export default BankDetails;
