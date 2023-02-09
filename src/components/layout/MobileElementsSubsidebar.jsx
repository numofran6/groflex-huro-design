import { useContext } from 'react';
import { sidebarToggleContext } from '../../context/sidebarToggle';

export const MobileElementsSubsidebar = () => {
	const { active } = useContext(sidebarToggleContext);

	return (
		<div
			className={`mobile-subsidebar is-activity ${active ? 'is-active' : ''}`}
		>
			<div className="inner">
				<div className="sidebar-title">
					<h3>Elements</h3>
				</div>

				<ul className="submenu">
					<li>
						<a href="">Lorem</a>
					</li>
					<li>
						<a href="">Lorem</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
