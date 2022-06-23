import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./Components/Navbar";
import { Contact } from "./Components/Contact";
import { AboutUs } from "./Sections/AboutUs/AboutUs";
import { OurValues } from "./Sections/OurValues/OurValues";
import { ChooseUs } from "./Sections/ChooseUs/ChooseUs";
import { OurServices } from "./Sections/OurServices/OurServices";

function App() {
	return (
		// <div className='appContainer'>START</div>
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path='/contact' element={<Contact />} />
				{/* <Route path='*' element={<Navigate to='/' />} /> */}
			</Routes>
			<AboutUs />
			<OurValues />
			<ChooseUs />
			<OurServices />
		</BrowserRouter>
	);
}

export default App;
