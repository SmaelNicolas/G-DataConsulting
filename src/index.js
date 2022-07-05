import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/Fonts/SegoeSmallLight.ttf";

import "./index.css";
import App from "./App";
import LanguageContextProvider from "./Components/Context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<LanguageContextProvider>
			<App />
		</LanguageContextProvider>
	</React.StrictMode>
);
