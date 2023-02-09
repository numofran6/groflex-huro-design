import { useContext } from 'react';
import { sidebarToggleContext } from '../../context/sidebarToggle';

export const MobileChatSubsidebar = () => {
	const { active } = useContext(sidebarToggleContext);

	return (
		<div
			className={`mobile-subsidebar is-activity ${active ? 'is-active' : ''}`}
		>
			<div className="inner">
				<div className="sidebar-title">
					<h3>Chat</h3>
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
