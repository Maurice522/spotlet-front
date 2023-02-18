import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addLocation,
  selectLocationData,
  selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

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
  console.log(location);

  useEffect(() => {
    if (location?.bankDetails) setbankDetails(location.bankDetails);
  }, []);

  const handleChange = (e) => {
    setbankDetails({
      ...bankDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange1 = (e) => {
    if (e.target.value.length < 17) {
      const value = e.target.value.replace(/\D/g, "");
      setbankDetails({
        ...bankDetails,
        [e.target.name]: value,
      });
    }
  };

  const handleChange2 = (e) => {
    if (e.target.value.length < 17) {
      const value = e.target.value.replace(/[0-9]/g, "");
      setbankDetails({
        ...bankDetails,
        [e.target.name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    console.log(bankDetails);
    if (
      !bankDetails.account_holder_name.length ||
      !bankDetails.account_number.length ||
      !bankDetails.bank_name.length ||
      !bankDetails.ifsc_code.length
    )
     { return toast.error("Please fill all required fields!!!")};
    if (!isNumeric(bankDetails.account_number))
      {return toast.error("Account number invalid")};
      if(!isNaN(bankDetails.ifsc_code.toString())) 
    {return toast.error("IFSC code invalid")};
    if (bankDetails.ifsc_code.length !== 11)
     { return toast.error("IFSC code invalid")};
    
    const locData = {
      ...location,
      bankDetails,
    };
    dispatch(addLocation(locData));
    const form = {
      location_id,
      data: locData,
    };
    try {
      await createTempLocation(form);
      showSection("Terms & Conditions");
    } catch (error) {
      toast.error(error.response.data);
    }

    changeSection("Review Application");
    window.scrollTo(0, 0);
  };

  return (
    <div className="lbox">
      <div className="row1">
        <div className="coll1">
          <h2>
            Account Holder's Name<span style={{ color: "red" }}>*</span>
          </h2>
          <input
            className="listingInput input"
            name="account_holder_name"
            type="text"
            onChange={handleChange2}
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
            onChange={handleChange2}
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
            type="text"
            onChange={handleChange1}
            value={bankDetails.account_number}
            pattern="[0-9]+"
            required
          />
        </div>
      </div>

      <div className="row1">
        <div className="coll1">
          <button className="bankContinue continue" onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
