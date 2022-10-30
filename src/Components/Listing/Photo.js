import React, { useState, useEffect } from "react";
import {
	addLocation,
	selectLocationData,
	selectLocationId,
} from "../../redux/slices/locationSlice";
import {
	createTempLocation,
	deleteFiles,
	uploadLocationPics,
} from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Clear } from "@mui/icons-material";

import {
	ref,
	uploadBytes,
	getDownloadURL,
	listAll,
	list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import { Button } from "@mui/material";

const Photo = ({ showSection }) => {
	const handleClick = () => {
		document.getElementById("inputD").click();
	};

	const [imageUpload, setImageUpload] = useState(null);
	const [imageUrls, setImageUrls] = useState([]);

	const imagesListRef = ref(null);
	const uploadFile = () => {
		if (imageUpload == null) return;
		if (imageUrls.length < 5)
			toast.error("Please add minimum 5 Photos");
		const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
		uploadBytes(imageRef, imageUpload).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((url) => {
				setImageUrls((prev) => [...prev, url]);
			});
		});
	};

	useEffect(() => {
		listAll(imagesListRef).then((response) => {
			response.items.forEach((item) => {
				getDownloadURL(item).then((url) => {
					setImageUrls((prev) => [...prev, url]);
				});
			});
		});
	}, []);
	return (
		<div>
			<div className="lbox">
				<div className="row1">
					<div className="uploadImage">
						<div className="button1" onClick={handleClick}>
							{" "}
							<h2>Upload Image</h2>
							<input
								type="file"
								accept="image/*"
								multiple
								id="inputD"
								className="inputD"
								onChange={(event) => {
									setImageUpload(event.target.files[0]);
								}}
							/>
						</div>
					</div>
				</div>
				<p style={{ marginLeft: "20px" }}>Add minimum 5 images</p>
				<div className="row1">
					<div className="coll1">
						<button onClick={uploadFile} className="continue">Continue</button>
						<div className="photoContainer">
							{imageUrls.map((url) => {
								return (
									<div>
										<img className="photos" src={url} key={url} />
										<Button onClick={() => {
											setImageUrls(imageUrls.filter(item => item !== url))
										}}>Delete</Button>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default Photo;
