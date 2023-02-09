import React, { createContext } from 'react';
import { useState } from 'react';

export const sidebarToggleContext = createContext();

export const SidebarToggleProvider = ({ children }) => {
	const [active, setActive] = useState(true);

	const handleActive = () => {
		setActive(!active);
	};

	return (
		<sidebarToggleContext.Provider value={{ active, handleActive }}>
			{children}
		</sidebarToggleContext.Provider>
	);
};
