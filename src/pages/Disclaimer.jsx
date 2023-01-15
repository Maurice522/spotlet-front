import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/text-only-styles.css";

const Disclaimer = () => {
    return (
        <div>
            <Navbar extraNavId="id-2" />
            <div className="text-only-container">
                <div className="text-only-main-heading" style={{color: "#ff6767"}}>Website Disclaimer</div>
                <div className="text-only-info">
                    The information contained in this website is for general information purposes only. The information is provided by spotlet.in, a property of SpotLet Solutions Private Limited. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                </div>
                <br />
                <div className="text-only-info">
                    In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                </div>
                <br />
                <div className="text-only-info">
                    Through this website you are able to link to other websites which are not under the control of SpotLet Solutions Private Limited. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </div>
                <br />
                <div className="text-only-info">
                    Every effort is made to keep the website up and running smoothly. However, SpotLet Solutions Private Limited takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
                </div>
                <br />
                <br />
                <br />
            </div>
            <Footer />
        </div>
    );
};

export default Disclaimer;
