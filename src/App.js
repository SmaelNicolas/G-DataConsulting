import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./Components/Navbar";
import { Contact } from "./Components/Contact";
import { TheCompany } from "./Components/TheCompany/TheCompany";

function App() {
	return (
		// <div className='appContainer'>START</div>
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path='/contact' element={<Contact />} />
				{/* <Route path='*' element={<Navigate to='/' />} /> */}
			</Routes>

			<TheCompany />
		</BrowserRouter>
	);
}

export default App;
