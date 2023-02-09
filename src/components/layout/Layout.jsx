import { MainSidebar } from './MainSidebar';
import { MobileNavbar } from './MobileNavbar';
import { MobileMainSidebar } from './MobileMainSidebar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<div className="app-wrapper">
			<div className="app-overlay"></div>
			<MainSidebar />

			<MobileNavbar />
			<MobileMainSidebar />

			<Outlet />
		</div>
	);
};
