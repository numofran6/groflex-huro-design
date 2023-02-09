import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './assets/scss/main.scss';
import { SidebarToggleProvider } from './context/sidebarToggle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<SidebarToggleProvider>
				<App />
			</SidebarToggleProvider>
		</BrowserRouter>
	</React.StrictMode>
);
