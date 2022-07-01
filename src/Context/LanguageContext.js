import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext([]);

const LanguageContextProvider = ({ children }) => {
	const [language, setLanguage] = useState("Spanish");
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	window.onload = () => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	useEffect(() => {
		if (language === "Spanish") {
			fetch("Data/spanishTexts.json")
				.then((res) => res.json())
				.then((data) => setData(data));
		} else {
			fetch("Data/englishTexts.json")
				.then((res) => res.json())
				.then((data) => setData(data));
		}
	}, [language]);

	return (
		<LanguageContext.Provider
			value={{ setLanguage, language, data, loading }}
		>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContextProvider;
