import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Assets/Styles/resources.css";
import image from "../Assets/Images/photographyMainImage.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Blog = () => {
	const [open, setOpen] = useState(false);
	const clicked = () => {
		setOpen(!open);
	};

	const params = useParams();
	console.log(params);

	return (
		<>
			<div>
				<Navbar extraNavId={"id-2"} />
				<div className="singleBlogContent">
					<h1>
						FILM SHOOTING LOCATIONS IN HYDERABAD
					</h1>
					<p>
						Hyderabad has a lot of old-fashioned charm. The city's Nizami culture is appealing with its forts and minars, beautiful alleyways, nice weather, and tasty biryanis. The same thing has been shown in many movies, where the actors speak in the local language and fall in love around its historic buildings. Today, we'll discuss some of the locations in Hyderabad that have been used in numerous films.
					</p>
					<br /><br /><br />
					<img src={image} alt="image" className="img1" />
					<br /><br /><br /><br />
					<p>
						Hyderabad has a lot of old-fashioned charm. The city's Nizami culture is appealing with its forts and minars, beautiful alleyways, nice weather, and tasty biryanis. The same thing has been shown in many movies, where the actors speak in the local language and fall in love around its historic buildings. Today, we'll discuss some of the locations in Hyderabad that have been used in numerous films.
					</p>
					<br />
					<p>
						The beautiful Golconda Fort is one of the places in Hyderabad that you must see. The Golconda Sultanate's capital, the fortified citadel, was built by the Qutub Shahi Dynasty. The Sultanate did well as a place to buy and sell diamonds like the Kohinoor, the Blue Hope, and many others. Many movies, from both Bollywood and Tollywood, have been shot at the fort. Scenes from Wanted, Singham Returns, and Bewafaa are some of the most well-known ones that were filmed here.
					</p>
					<br /><br /><br />
					<img src={image} alt="image" className="img1" />
					<br /><br /><br />
					<p>
						Charminar is another beautiful place in the city that you must see. The building stands tall in the middle of the city, reminding people of a time long ago. There are markets all around it, and it has great views from the top floors. During the Qutub Shahi Dynasty, the fifth ruler, Muhammad Quli Qutb Shah, built the mosque. The building is now surrounded by a market, restaurants, and shops that sell the famous pearls and bangles of Hyderabad. Bollywood movies like Dilwale, Daawat-e-Ishq, Hyderabad Blues, and many more have been filmed here.
					</p>
					<br />
					<p>
						Some of the most well-known movies have been shot in Ramoji film city, which is one of the largest film cities in the world. One of the most successful movies ever, Baahubali, was filmed here. Bollywood movies like Chennai Express, Cocktail, and Well Done Abba, among others, have been filmed at this location in Hyderabad. Oh, and here's a fun fact: people think that the ghosts of soldiers haunt the film city!
					</p>
					<br /><br /><br />
					<div className="img-container">
						<div>
							<img src={image} alt="image" className="img2" />
							<img src={image} alt="image" className="img2" />
						</div>
						<div>
							<img src={image} alt="image" className="img2" />
							<img src={image} alt="image" className="img2" />
						</div>
						<img src={image} alt="image" className="img1" />
						<div>
							<img src={image} alt="image" className="img2" />
							<img src={image} alt="image" className="img2" />
						</div>
					</div>
					<br /><br /><br />
					<p>
						There have been college scenes in many Bollywood movies, but few are as famous as the ones in Tere Naam, in which Salman Khan played a lover who ends up in an asylum. Parts of the movie were filmed at the City College in Hyderabad, which is still a well-known location.
					</p>
					<br />
					<p>
						Some of Bollywood's most memorable scenes have been filmed at train stations and on trains. Whether it's the famous "Jaa Simran, Jaa" scene from Dilwale Dulhaniya Le Jaayenge, the Eurail scene from the same movie, or the train scenes from Jab We Met, trains are as iconic to Indian movies as the film business itself. So, it's not surprising that one of the places where Daawat-e-Ishq was filmed was the Hyderabad Railway Station, where another important scene took place.
					</p>
					<br />
					<p>
						If you want to find places to shoot movies or web series in Hyderabad, please check www.spotlet.in for more information and to see if there are any spots left. SpotLet lets you book a place at the touch of a button, with prices that are transparent.
					</p>
					<br />
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Blog;
