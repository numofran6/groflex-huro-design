import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { sidebarToggleContext } from '../../context/sidebarToggle';

export const MobileUserGridSubsidebar = () => {
	const { active } = useContext(sidebarToggleContext);

	return (
		<div
			className={`mobile-subsidebar is-activity ${active ? 'is-active' : ''}`}
		>
			<div className="inner">
				<div className="sidebar-title">
					<h3>User Grid</h3>
				</div>

				<ul className="submenu">
					<li>
						<a href="">Lorem</a>
					</li>
					<li>
						<a href="">Lorem</a>
					</li>
					<li>
						<a href="">Lorem</a>
					</li>

					<li
						className={
							window.location.pathname === '/more-on-lorem' ? 'is-active' : ''
						}
					>
						<Link to={'/more-on-lorem'}>More on Lorem</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
