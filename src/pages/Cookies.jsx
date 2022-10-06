import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image from "../Assets/Images/cookie-header-image.jpeg";

import "../Assets/Styles/cookie.css";

const Cookies = () => {
	return (
		<div>
			<Navbar extraNavId={"id-2"} />
			<div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image darken" />
				<div className="message myMessage ">WELCOME TO THE HOST COMMUNITY</div>
			</div>

			<div className="cookie-table-container">
				<h3>Website Data Collection Preferences</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
					nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
					pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
					purus rhoncus pulvinar aliquam.{" "}
				</p>

				<div className="cookie-table">
					<h3>Allow</h3>
					<h3>Category</h3>
					<h3>Purpose</h3>
					<h3>Tools</h3>

					<div className="allow-column">
						<div>
							<input type="checkbox" name="allow" id="allow" checked />
							<span>Yes</span>
						</div>
						<div>
							<input type="checkbox" name="allow" id="allow" />
							<span>No</span>
						</div>
					</div>
					<div>Functional</div>
					<div>
						<p
							style={{
								marginBottom: "8px",
							}}>
							To monitor the performance of our site and to enhance your
							browsing experience.
						</p>

						<p>
							For example, these tools enable you to communicate with us via
							live chat.
						</p>
					</div>
					<div>Branch Metrics, Zendesk</div>

					<div className="allow-column">
						<div>
							<input type="checkbox" name="allow" id="allow" checked />
							<span>Yes</span>
						</div>
						<div>
							<input type="checkbox" name="allow" id="allow" />
							<span>No</span>
						</div>
					</div>
					<div>Marketing and Analytics</div>
					<div>
						<p
							style={{
								marginBottom: "8px",
							}}>
							To monitor the performance of our site and to enhance your
							browsing experience.
						</p>

						<p>
							For example, these tools enable you to communicate with us via
							live chat.
						</p>
					</div>
					<div>Delighted, Google Universal Analytics, Vero, Webhooks</div>

					<div className="allow-column">
						<div>
							<input type="checkbox" name="allow" id="allow" checked />
							<span>Yes</span>
						</div>
						<div>
							<input type="checkbox" name="allow" id="allow" />
							<span>No</span>
						</div>
					</div>
					<div>Functional</div>
					<div>
						<p
							style={{
								marginBottom: "8px",
							}}>
							To monitor the performance of our site and to enhance your
							browsing experience.
						</p>

						<p>
							For example, these tools enable you to communicate with us via
							live chat.
						</p>
					</div>
					<div>Branch Metrics, Zendesk</div>

					<div className="allow-column">
						<div>
							<input type="checkbox" name="allow" id="allow" checked />
							<span>Yes</span>
						</div>
						<div>
							<input type="checkbox" name="allow" id="allow" />
							<span>No</span>
						</div>
					</div>
					<div>Functional</div>
					<div>
						<p
							style={{
								marginBottom: "8px",
							}}>
							We use browser cookies that are necessary for the site to work as
							intended.
						</p>

						<p>
							For example, we store your website data collection preferences so
							we can honor them if you return to our site. You can disable these
							cookies in your browser settings but if you do the site may not
							work as intended.
						</p>
					</div>
					<div></div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Cookies;
