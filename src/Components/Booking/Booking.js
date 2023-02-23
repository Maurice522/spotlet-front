import React, { useEffect } from "react";
import { MenuItem, Select, TextField } from "@mui/material";

import "../../Assets/Styles/Booking/booking.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { toast } from "react-toastify";
import {AiFillDelete} from "react-icons/ai"

const Booking = ({ v1, v2, v3, v4, v5, v6, v7,event,arrayOfAddDayData,setarrayOfAddDayData }) => {
  // console.log(v1, v2, v3, v4, v5, v6,v7);
  console.log("type",event);

  const date = new Date(v7);
  const day = v1?.getDate();
  const month = v1?.getMonth() + 1;
  const year = v1?.getFullYear();
  const[active,setActive]=useState(false)
const [addDayData,setAddDayData]=useState({bookedDate: "",bookedTime: "",bookedHours: ""})
const[timeSlot,setTimeSlot]=useState("Select...")
const[isAdded,setIsAdded]=useState(false)
console.log("arrayOfAddDayData",arrayOfAddDayData)
  // const newDay = date?.getDate();
  // const newMonth = date?.getMonth() + 1;
  // const newYear = date?.getFullYear();
  // const ampm = date?.getHours() > 12 ? "pm" : "am";
  // let newHour = date?.getHours() > 12 ? date?.getHours() - 12 : date?.getHours();
  // console.log(newHour.toString().length);
  // if(newHour.toString().length < 2)
  //   newHour = "0" + newHour;
  // const newMin = date?.getMinutes();
  // console.log(newHour);
useEffect(()=>{
setTimeout(()=>{
if(isAdded){setIsAdded(false)}
},1000)
},[isAdded])

  let dtToday = new Date();

  let monthh = dtToday.getMonth() + 1;
  let dayy = dtToday.getDate();
  let yearr = dtToday.getFullYear();

  if (monthh < 10) monthh = "0" + monthh.toString();
  if (dayy < 10) dayy = "0" + dayy.toString();

  let maxDate = yearr + "-" + monthh + "-" + dayy;
  
const handleChangeInAddDay=(e)=>{

  const{name,value}=e.target
  setAddDayData((prev)=>{return {...prev,[name]:value}})
}

const addADayToOldData=(e)=>{
  if(addDayData.bookedDate===""||addDayData.bookedTime===""||addDayData.bookedHours===""){toast.error("Kindly fill required slots");return}
  setarrayOfAddDayData((prev)=>{
    return [...prev,{...addDayData,id:new Date().getTime()}]
  })
  setIsAdded(true)
  setAddDayData({bookedDate: "",bookedTime: "",bookedHours: ""})
  setTimeSlot("Select...")
}

const handleAddDayDelete=(id)=>{
  let temp=arrayOfAddDayData.filter((item)=>{return item.id!==id})
  setarrayOfAddDayData(temp)
}
  return (
    <>
    <form id="booking-page-form">
      <div>
        <label htmlFor="date">Date</label>
        <TextField
          required
          disabled
          id="date"
          type="text"
          fullWidth
          size="small"
          // defaultValue={day + "-" + month + "-" + year}
          value={day + "-" + month + "-" + year}
          // value={day + "-" + month + "-" + year + ", " + newDay + "-" + newMonth + "-" + newYear}
        />
        {arrayOfAddDayData.length>0?<>
          {arrayOfAddDayData.map((date)=>{
            return<> <div style={{display:"flex",alignItems:"center",marginTop:".5rem"}}><TextField
          required
          disabled
          id="date"
          type="text"
          fullWidth
          size="small"
          value={date.bookedDate}
        
        />
        <span><AiFillDelete onClick={()=>{handleAddDayDelete(date.id)}} style={{cursor:"pointer",fontSize:"1.3rem"}}/></span>
        </div>
        </>
          })}
        </>:null}
      </div>
      <div>
        <label htmlFor="start-time">Start Time</label>
        <TextField
          required
          disabled
          id="start-time"
          type="text"
          defaultValue={v2}
          // defaultValue={v2 + ", " + newHour + ":" + newMin + " " + ampm}
          fullWidth
          size="small"
        />
        {arrayOfAddDayData.length>0?<>
          {arrayOfAddDayData.map((date)=>{
            return<> <div style={{display:"flex",alignItems:"center",marginTop:".5rem"}}><TextField
          required
          disabled
          id="date"
          type="text"
          fullWidth
          size="small"
          value={date.bookedTime}
        
        />
        <span><AiFillDelete onClick={()=>{handleAddDayDelete(date.id)}} style={{cursor:"pointer",fontSize:"1.3rem"}}/></span>
        </div>
        </>
          })}
        </>:null}
      </div>
      <div>
        <label htmlFor="duration">Duration</label>
        <TextField
          required
          disabled
          id="duration"
          type="number"
          fullWidth
          size="small"
          defaultValue={v3}
        />
        {arrayOfAddDayData.length>0?<>
          {arrayOfAddDayData.map((date)=>{
            return<> <div style={{display:"flex",alignItems:"center",marginTop:".5rem"}}><TextField
          required
          disabled
          id="date"
          type="text"
          fullWidth
          size="small"
          value={date.bookedHours}
        
        />
        <span><AiFillDelete onClick={()=>{handleAddDayDelete(date.id)}} style={{cursor:"pointer",fontSize:"1.3rem"}}/></span>
        </div>
        </>
          })}
        </>:null}
      </div>
      <div>
        <label htmlFor="attendies">Attendies</label>
        <TextField
          required
          disabled
          id="attendies"
          type="text"
          fullWidth
          size="small"
          defaultValue={v4}
        />
      </div>
      <div>
        <label htmlFor="activity">Activity</label>
        <TextField
          required
          disabled
          id="activity"
          type="text"
          fullWidth
          size="small"
          defaultValue={v5}
        />
      </div>
      {/* <div className="filter-body booking-checkbox">
        <h2>Do you need a location manager?</h2>
        <div className="filter--coll3">
          <label class="filter-container">
            Yes
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="filter-container">
            No
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div> */}
    </form>
    <div className="booking_addADay_cont">
      <div className="booking_datePicker_cont">
        <h3>Date</h3>
        <TextField
              required
              id="dob"
              type="date"
              fullWidth
              size="small"
              name="bookedDate"
              placeholder="dd-mm-yyyy"
              onChange={handleChangeInAddDay}
              value={addDayData.bookedDate}
              inputProps={{ min: maxDate }}
              
            />
      </div>
      {event==="Film, Webseries or Ad"||event==="TV Series and Others"?<div className="booking_timePicker_cont">
      <h3>Time Slot</h3>
      <div className="">
      <div style={{marginLeft:"1.5rem"}}>
										<Select
                    style={{width:"200px"}}
											required
											id="time-shifts"
											name="bookedTime"
											defaultValue=""
											type="time"
											className={active === true ? "focus" : "normal"}
                      onChange={(e)=>{setAddDayData((prev)=>{return {...prev,bookedHours:e.target.value === "6am-6pm" ? "12" : "22",bookedTime:"06:00 am"}});setTimeSlot(e.target.value)}}
											value={timeSlot}
											displayEmpty
										>
										{/* <MenuItem value="Select">Select........</MenuItem> */}
										{new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(6)>new Date().getTime()? <MenuItem value="6am-6pm">Half Day (6am to 6pm)</MenuItem>:null:<MenuItem value="6am-6pm">Half Day (6am to 6pm)</MenuItem>}
											
											<MenuItem value="6am-2am">Full Day (6am to 2am)</MenuItem>
										</Select>
									</div>
      </div>
      </div>:null}
      {event==="Individual"||event==="Corporate"?<div className="booking_timePicker_cont_individual">
      <div style={{display:"flex",flexDirection:"column"}}>
      <h3>Start Time</h3>
      <div className="">
      <Select
      style={{width:"200px"}}
												required
												id="start-time"
												name="bookedTime"
												MenuProps={{
													style: {
														maxHeight: 300,
														width: 150,
													},
												}}
												type="text"
												className={active === true ? "focus" : "normal"}
												onChange={handleChangeInAddDay}
												value={addDayData.bookedTime}
											>
												{new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(1)>new Date().getTime()?<MenuItem value="01:00 am">01:00 am</MenuItem>:null:<MenuItem value="01:00 am">01:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(2)>new Date().getTime()?<MenuItem value="02:00 am">02:00 am</MenuItem>:null:<MenuItem value="02:00 am">02:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(3)>new Date().getTime()?<MenuItem value="03:00 am">03:00 am</MenuItem>:null:<MenuItem value="03:00 am">03:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(4)>new Date().getTime()?<MenuItem value="04:00 am">04:00 am</MenuItem>:null:<MenuItem value="04:00 am">04:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(5)>new Date().getTime()?<MenuItem value="05:00 am">05:00 am</MenuItem>:null:<MenuItem value="05:00 am">05:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(6)>new Date().getTime()?<MenuItem value="06:00 am">06:00 am</MenuItem>:null:<MenuItem value="06:00 am">06:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(7)>new Date().getTime()?<MenuItem value="07:00 am">07:00 am</MenuItem>:null:<MenuItem value="07:00 am">07:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(8)>new Date().getTime()?<MenuItem value="08:00 am">08:00 am</MenuItem>:null:<MenuItem value="08:00 am">08:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(9)>new Date().getTime()?<MenuItem value="09:00 am">09:00 am</MenuItem>:null:<MenuItem value="09:00 am">09:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(10)>new Date().getTime()?<MenuItem value="10:00 am">10:00 am</MenuItem>:null:<MenuItem value="10:00 am">10:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(11)>new Date().getTime()?<MenuItem value="11:00 am">11:00 am</MenuItem>:null:<MenuItem value="11:00 am">11:00 am</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(12)>new Date().getTime()?<MenuItem value="12:00 pm">12:00 pm</MenuItem>:null:<MenuItem value="12:00 pm">12:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(13)>new Date().getTime()?<MenuItem value="01:00 pm">01:00 pm</MenuItem>:null:<MenuItem value="01:00 pm">01:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(14)>new Date().getTime()?<MenuItem value="02:00 pm">02:00 pm</MenuItem>:null:<MenuItem value="02:00 pm">02:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(15)>new Date().getTime()?<MenuItem value="03:00 pm">03:00 pm</MenuItem>:null:<MenuItem value="03:00 pm">03:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(16)>new Date().getTime()?<MenuItem value="04:00 pm">04:00 pm</MenuItem>:null:<MenuItem value="04:00 pm">04:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(17)>new Date().getTime()?<MenuItem value="05:00 pm">05:00 pm</MenuItem>:null:<MenuItem value="05:00 pm">05:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(18)>new Date().getTime()?<MenuItem value="06:00 pm">06:00 pm</MenuItem>:null:<MenuItem value="06:00 pm">06:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(19)>new Date().getTime()?<MenuItem value="07:00 pm">07:00 pm</MenuItem>:null:<MenuItem value="07:00 pm">07:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(20)>new Date().getTime()?<MenuItem value="08:00 pm">08:00 pm</MenuItem>:null:<MenuItem value="08:00 pm">08:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(21)>new Date().getTime()?<MenuItem value="09:00 pm">09:00 pm</MenuItem>:null:<MenuItem value="09:00 pm">09:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(22)>new Date().getTime()?<MenuItem value="10:00 pm">10:00 pm</MenuItem>:null:<MenuItem value="10:00 pm">10:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(23)>new Date().getTime()?<MenuItem value="11:00 pm">11:00 pm</MenuItem>:null:<MenuItem value="11:00 pm">11:00 pm</MenuItem>}
                  {new Date(addDayData.bookedDate).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(24)>new Date().getTime()?<MenuItem value="12:00 pm">12:00 pm</MenuItem>:null:<MenuItem value="12:00 pm">12:00 pm</MenuItem>}
											</Select>
      </div>
      </div>

      <div style={{display:"flex",flexDirection:"column",marginLeft:"1rem"}}>
      <h3>Number of Hours</h3>
      <div className="">
      <Select
      style={{width:"200px"}}
													required
													type="number"
													id="number-of-hours"
													name="bookedHours"
												
													className={active === true ? "focus" : "normal"}
													onChange={handleChangeInAddDay}
													value={addDayData.bookedHours}
													displayEmpty
												>
													<MenuItem value="8">8 hours</MenuItem>
													<MenuItem value="12">12 hours</MenuItem>
													<MenuItem value="24">24 hours</MenuItem>
												</Select>
      </div>
      </div>
      
      </div>:null}
      <button onClick={addADayToOldData} className="booking_addADayBtn">{isAdded?"Added":"Add A Day"}</button>
    </div>
    </>
  );
};

export default Booking;
