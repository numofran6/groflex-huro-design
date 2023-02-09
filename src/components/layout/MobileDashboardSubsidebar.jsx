import { useContext } from 'react';
import { sidebarToggleContext } from '../../context/sidebarToggle';

export const MobileDashboardSubsidebar = () => {
	const { active } = useContext(sidebarToggleContext);

	return (
		<div
			className={`mobile-subsidebar is-activity ${active ? 'is-active' : ''}`}
		>
			<div className="inner">
				<div className="sidebar-title">
					<h3>Dashboard</h3>
				</div>

				<ul className="submenu">
					<li>
						<a href="">Lorem Ipsum</a>
					</li>

					<li>
						<a href="">Lorem Ipsum</a>
					</li>

					<li>
						<a href="">Lorem Ipsum</a>
					</li>

					<li>
						<a href="">Lorem Ipsum</a>
					</li>

					<li>
						<a href="">Lorem Ipsum</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
