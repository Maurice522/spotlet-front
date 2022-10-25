import React, { useState } from "react";
import "../../Assets/Styles/Home/testimonials.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import img1 from "../../Assets/Images/testimonial-image-1.jpeg";
import img2 from "../../Assets/Images/testimonial-image-2.jpeg";
import img3 from "../../Assets/Images/testimonial-image-3.jpeg";

const Testimonials = () => {
	const infoObj = [
		{
			image: img1,
			name: "Dhir Acharya",
			testimony:
				"When we decided to get married, we sought outdoor wedding venues to celebrate our special day. While there are many destination wedding places, finding the right one can be challenging. Luckily, we came across SpotLet and could instantly shortlist 3 locations for weddings. After speaking to the hosts and getting quotations, we found our dream wedding destination, and the entire process went smoothly! Thank you, SpotLet.",
		},
		{
			image: img2,
			name: "Aadhya Patel",
			testimony:
				"After working from home for almost two years, our teams finally came to the office this year. However, the employees couldn’t bond well since we had many new recruits. So, we decided to host a corporate event and started looking for team meeting locations. Thankfully, SpotLet’s great list of venues helped us find the best corporate retreat centre at an affordable price. As a result, our teams are now indeed in sync. Thank you for this service.",
		},
		{
			image: img3,
			name: "Divya Balakrishnan",
			testimony:
				"We planned to shoot for a feature film and needed a unique location with particular interiors. After searching a lot in Hyderabad, we still couldn’t find our dream shoot location. Then one of the crew members suggested searching on SpotLet. The wide range of film shooting locations helped us choose one immediately. The host was accommodating, and our shoot was a big success.",
		},
		{
			image: img1,
			name: "Shrey Apte",
			testimony:
				"As a regional production house, we’re always looking for new and innovative spaces for our shoot locations. SpotLet allowed us to choose from hundreds of top video shoot locations within our locality, and we’re now their loyal customers! Every booking is easy, quick and affordable, and the hosts are always ready to help during the shoot. Thank you, SpotLet! We will definitely recommend their services.",
		},
		{
			image: img2,
			name: "Manavi Malhotra",
			testimony:
				"Our company was planning a new product, and thus, we wanted a spacious area for the party. After searching for many product launch event locations, we still couldn’t find something that suited our budget and preferences. When we visited SpotLet, we found many sites we liked in just a few clicks! They genuinely have the best places for corporate events.",
		},
	];

	const [cnt, setCnt] = useState(0);

	const objArray = [
		{
			info: infoObj[cnt % 5],
			classes: [
				"testimonial-carousel-card secondary",
				"avatar",
				"side card",
				"testimonial-name",
				"testimonial-testimony",
				"starter",
			],
		},
		{
			info: infoObj[(cnt + 1) % 5],
			classes: [
				"testimonial-carousel-card primary",
				"avatar main",
				"middle card",
				"testimonial-name-main",
				"testimonial-testimony-main",
				"starter-main",
			],
		},
		{
			info: infoObj[(cnt + 2) % 5],
			classes: [
				"testimonial-carousel-card secondary",
				"avatar",
				"side card",
				"testimonial-name",
				"testimonial-testimony",
				"starter",
			],
		},
		// {
		// 	info: infoObj[(cnt + 3) % 5],
		// 	classes: [
		// 		"testimonial-carousel-card primary",
		// 		"avatar main",
		// 		"middle card",
		// 		"testimonial-name-main",
		// 		"testimonial-testimony-main",
		// 		"starter-main",
		// 	],
		// },
		// {
		// 	info: infoObj[(cnt + 4) % 5],
		// 	classes: [
		// 		"testimonial-carousel-card secondary",
		// 		"avatar",
		// 		"side card",
		// 		"testimonial-name",
		// 		"testimonial-testimony",
		// 		"starter",
		// 	],
		// },
	];

	return (
		<div className="testimonial-container">
			<div className="testimonial-heading">Testimonials</div>
			<div className="testimonial-carousel">
				<div className="left-right-arrows">
					<AiOutlineLeft
						size="32px"
						onClick={() => {
							console.log("clicked");
							setCnt((prev) => (prev > 0 ? prev - 1 : 5));
						}}
					/>
				</div>

				{objArray.map((obj, index) => (
					<div className={obj.classes[0]} key={index}>
						<div className={obj.classes[1]}>
							<img
								src={obj.info.image}
								alt="testimonial"
								style={{
									width: "100%",
									height: "100%",
									borderRadius: "50%",
								}}
							/>
						</div>
						<div className={obj.classes[2]}>
							<div className={obj.classes[3]}>{obj.info.name}</div>
							<div className={obj.classes[4]}>
								<span className={obj.classes[5]}>“</span>
								{obj.info.testimony}
							</div>
						</div>
					</div>
				))}

				<div className="left-right-arrows">
					<AiOutlineRight
						size="32px"
						onClick={() => {
							console.log("clicked");
							setCnt((prev) => (prev < 5 ? prev + 1 : 0));
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
