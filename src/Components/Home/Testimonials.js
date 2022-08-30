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
			name: "Full Name 1",
			testimony:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in",
		},
		{
			image: img2,
			name: "Full Name 2",
			testimony:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in",
		},
		{
			image: img3,
			name: "Full Name 3",
			testimony:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in",
		},
	];

	const [cnt, setCnt] = useState(0);

	const objArray = [
		{
			info: infoObj[cnt % 3],
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
			info: infoObj[(cnt + 1) % 3],
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
			info: infoObj[(cnt + 2) % 3],
			classes: [
				"testimonial-carousel-card secondary",
				"avatar",
				"side card",
				"testimonial-name",
				"testimonial-testimony",
				"starter",
			],
		},
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
							setCnt((prev) => (prev > 0 ? prev - 1 : 3));
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
							setCnt((prev) => (prev < 3 ? prev + 1 : 0));
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
