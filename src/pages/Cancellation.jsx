import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TAS_Cards from "../Components/TAS_Cards";
import "../Assets/Styles/cancellation.css";

import { MdExpandMore } from "react-icons/md";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const Cancellation = () => {
  const elements = [
    {
      title: "7+ days before your shoot",
      info: "You will get a 100% refund if you cancel your booking seven days before your planned arrival. This gives our hosts a chance to find other guests during that tenure.",
    },
    {
      title: "72+ hours before your shoot",
      info: "You will get a 50% payment refund within the next seven business days if you cancel before 72 hours. We hope you will book again soon and experience the awesomeness at the property.",
    },
    {
      title: "24+ hours before your shoot",
      info: "Unfortunately, we won’t be able to offer any refunds if you cancel just 24 hours before your estimated arrival. Our hosts can’t find guests on such short notice! Please do visit us again soon.",
    },
  ];

  const accordion = [
    {
      title: "Pardonable Cancellation",
      info: "Lorem ipsum",
    },
    {
      title: "Reschedule",
      info: "Lorem ipsum",
    },
    {
      title: "Rain Dates",
      info: "Lorem ipsum",
    },
    {
      title: "How to get more clients",
      info: "Lorem ipsum",
    },
  ];

  return (
    <div>
      <Navbar extraNavId={"id-2"} />
      <div className="below-nav">
        <div className="cancellation-container">
          <h1>Cancellation Policy</h1>
          <div>
          We understand that even the best-laid plans sometimes change at the last minute. In order to protect our hosts and be fair to our guests, we have prepared a cancellation policy that applies to all bookings made on SpotLet.
          </div>

          <div className="tas-card-container ">
            {elements.map((item, ind) => (
              <TAS_Cards data={item} key={ind} />
            ))}
          </div>
          <br />
          <br />

          <div className="accordion-container">
            <h1>Frequently Asked Questions</h1>
            {accordion.map((item, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  sx={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "20px",
                    padding: "10px",
                    marginLeft: "8px",
                  }}
                  expandIcon={<MdExpandMore size="31px" color="black" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {item.title}
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    paddingBottom: "30px",
                  }}
                >
                  {item.info}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cancellation;
