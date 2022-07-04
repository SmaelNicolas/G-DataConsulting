import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext([]);

const LanguageContextProvider = ({ children }) => {
	const [language, setLanguage] = useState("Spanish");
	const [data, setData] = useState({});

	useEffect(() => {
		if (language === "English") {
			fetch("Data/englishTexts.json")
				.then((res) => res.json())
				.then((data) => setData(data));
		} else {
			fetch("Data/spanishTexts.json")
				.then((res) => res.json())
				.then((data) => setData(data));
		}
	}, [language]);

	return (
		<LanguageContext.Provider value={{ setLanguage, language, data }}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContextProvider;
