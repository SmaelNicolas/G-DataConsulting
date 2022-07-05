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
import { useContext } from "react";
import { LanguageContext } from "./Context/LanguageContext";
import { Loading } from "./Components/Loading/Loading";
import { ImageP } from "./Sections/Image/ImageP";

function App() {
	const { loading } = useContext(LanguageContext);

	return loading ? (
		<Loading />
	) : (
		<BrowserRouter>
			<NavBar />
			<ImageP />
			<AboutUs />
			<OurValues />
			<Galery />
			<MoreUs />
			<OurServices />
			<Contact />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
