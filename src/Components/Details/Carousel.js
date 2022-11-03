import React, { useState } from "react";
import { BiShareAlt } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "../../Assets/Styles/Details/carousel.css";
import img1 from "../../Assets/Images/property-page-carousel-img-1.jpeg";
import img2 from "../../Assets/Images/property-page-carousel-img-2.jpeg";
import img3 from "../../Assets/Images/property-page-carousel-img-3.jpeg";
import img4 from "../../Assets/Images/property-page-carousel-img-4.jpeg";
import img5 from "../../Assets/Images/property-page-carousel-img-5.jpeg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { toast } from "react-toastify";
import { GiFilmProjector } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineCorporateFare } from "react-icons/md";

const Carousel = ({ locationData }) => {
	const images = locationData?.imagesData;
	//console.log(images)
	const imgArr1 = [images?.at(0).image, images?.at(1).image, images?.at(2).image, images?.at(3).image, images?.at(4).image];
	const imgArr2 = [images?.at(1).image, images?.at(2).image, images?.at(3).image, images?.at(4).image, images?.at(0).image];
	const imgArr3 = [images?.at(2).image, images?.at(3).image, images?.at(4).image, images?.at(0).image, images?.at(1).image];
	const imgArr4 = [images?.at(3).image, images?.at(4).image, images?.at(0).image, images?.at(1).image, images?.at(2).image];
	const imgArr5 = [images?.at(4).image, images?.at(0).image, images?.at(1).image, images?.at(2).image, images?.at(3).image];

	const imgMap = {
		1: imgArr1,
		2: imgArr2,
		3: imgArr3,
		4: imgArr4,
		5: imgArr5,
	};

	const [val, setVal] = useState(1);
	const [fav, setFav] = useState(false);

	const [copied, setCopied] = useState(false);

	const copy = () => {
		const el = document.createElement("input");
		el.value = window.location.href;
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
		setCopied(true);
		toast.success("The link is copied to your clipboard!");
	}

	// console.log(imgMap[val]);

	const classes = ["side2", "side1", "center", "side1", "side2"];

	const items = imgMap[val]?.map((img, index) => {
		return (
			<div className={classes[index]} key={index}>
				<img src={img} alt="property-page-carousel-img" className="image" />
			</div>
		);
	});

	return (
		<div className="below-nav">
			<div className="property-page-main-image">
				<img
					src={imgMap[val][2]}
					alt="property-page-carousel-img-1"
					className="image"
				/>
			</div>
			<div className="carousel">
				<AiOutlineLeft
					size="30px"
					color="#374047"
					style={{ cursor: "pointer" }}
					onClick={() => {
						if (val === 1) {
							setVal(5);
						} else {
							setVal((prev) => prev - 1);
						}
					}}
				/>
				{items}
				<AiOutlineRight
					size="30px"
					color="#374047"
					style={{ cursor: "pointer" }}
					onClick={() => {
						if (val === 5) {
							setVal(1);
						} else {
							setVal((prev) => prev + 1);
						}
					}}
				/>
			</div>
			<div className="property-info">
				<div>
					<div className="name">{locationData?.property_desc?.location_type}</div>
					<div className="location">{locationData?.property_address?.address}</div>
				</div>
				<div className="icons">
					{locationData?.pricing?.corporate?.isPresent && (
						<MdOutlineCorporateFare size="30px" />
					)}
					{locationData?.pricing?.film_webseries_ad?.isPresent && (
						<GiFilmProjector size="30px" />
					)}
					{locationData?.pricing?.individual?.isPresent && (
						<BsPersonFill size="30px" />
					)}
					{locationData?.pricing?.tv_series_other?.isPresent && (
						<GiFilmProjector size="30px" />
					)}
					<div
						style={{
							marginTop: "3px",
						}}>
						<BiShareAlt
							color="#374047"
							size="24px"
							style={{ cursor: "pointer" }}
							onClick={copy}
						/>
					</div>
					{fav === true ? (
						<AiFillHeart
							style={{ cursor: "pointer" }}
							color="#ff4d4d"
							size="30px"
							onClick={() => setFav(false)}
						/>
					) : (
						<AiOutlineHeart
							style={{ cursor: "pointer" }}
							color="#374047"
							size="30px"
							onClick={() => setFav(true)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
