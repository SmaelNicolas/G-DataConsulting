import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./Components/Navbar/Navbar";
import { Contact } from "./Sections/Contact/Contact";
import { AboutUs } from "./Sections/AboutUs/AboutUs";
import { OurValues } from "./Sections/OurValues/OurValues";
import { OurServices } from "./Sections/OurServices/OurServices";
import { Galery } from "./Sections/Galery/Galery";
import { Footer } from "./Sections/Footer/Footer";
import { MoreUs } from "./Sections/MoreUs/MoreUs";
import { useEffect, useState } from "react";
import { Loading } from "./Components/Loading/Loading";
import { ImageP } from "./Sections/Image/ImageP";
import { SocialMedia } from "./Components/SocialMedia/SocialMedia";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeoutID = setTimeout(() => {
			setLoading(false);
		}, 1300);

		return () => {
			clearTimeout(timeoutID);
		};
	}, []);

	return loading ? (
		<Loading />
	) : (
		<BrowserRouter>
			<div className='appContainer'>
				<NavBar />
				<SocialMedia />
				<ImageP />
				<AboutUs />
				<OurValues />
				<Galery />
				<MoreUs />
				<OurServices />
				<Contact />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
