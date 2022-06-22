import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import { NavBar } from "./Components/Navbar";
import { Contact } from "./Components/Contact";

function App() {
	return (
	// <div className='appContainer'>START</div>	
		<BrowserRouter> 
  
            <NavBar/>
  
            <Routes>
                <Route path='/contact' element={ <Contact/> } />
                <Route path='*' element={ <Navigate to='/' /> } />
            </Routes>
  
        </BrowserRouter>
	)
	

		

}

export default App;
