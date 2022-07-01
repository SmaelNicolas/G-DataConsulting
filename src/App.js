import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./Components/Navbar";
import { Contact } from "./Sections/Contact/Contact";
import { AboutUs } from "./Sections/AboutUs/AboutUs";
import { OurValues } from "./Sections/OurValues/OurValues";
import { OurServices } from "./Sections/OurServices/OurServices";
import { Galery } from "./Sections/Galery/Galery";
import { Footer } from "./Sections/Footer/Footer";
import { MoreUs } from "./Sections/MoreUs/MoreUs";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
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
