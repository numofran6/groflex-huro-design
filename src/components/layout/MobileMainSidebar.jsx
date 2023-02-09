import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { sidebarToggleContext } from '../../context/sidebarToggle';

export const MobileMainSidebar = () => {
	const { active } = useContext(sidebarToggleContext);

	const routes = {
		home: '/',
		userGrid: '/user-grid',
		elements: '/elements',
		components: '/components',
		chat: '/chat',
	};

	const navLinkStyle = ({ isActive }) => {
		if (isActive) {
			return 'is-selected is-active';
		} else {
			return '';
		}
	};

	const userGridLinkStyle = ({ isActive }) => {
		if (window.location.pathname === '/more-on-lorem' || isActive) {
			return 'is-selected is-active';
		} else {
			return '';
		}
	};

	return (
		<div className={`mobile-main-sidebar ${active ? 'is-active' : ''}`}>
			<div className="inner">
				<ul className="icon-side-menu">
					<li>
						<NavLink to={routes.home} className={navLinkStyle}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-activity"
							>
								<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
							</svg>
						</NavLink>
					</li>

					<li>
						<NavLink to={routes.userGrid} className={userGridLinkStyle}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-grid"
							>
								<rect x="3" y="3" width="7" height="7"></rect>
								<rect x="14" y="3" width="7" height="7"></rect>
								<rect x="14" y="14" width="7" height="7"></rect>
								<rect x="3" y="14" width="7" height="7"></rect>
							</svg>
						</NavLink>
					</li>

					<li>
						<NavLink to={routes.elements} className={navLinkStyle}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-box"
							>
								<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
								<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
								<line x1="12" y1="22.08" x2="12" y2="12"></line>
							</svg>
						</NavLink>
					</li>

					<li>
						<NavLink to={routes.components} className={navLinkStyle}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-cpu"
							>
								<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
								<rect x="9" y="9" width="6" height="6"></rect>
								<line x1="9" y1="1" x2="9" y2="4"></line>
								<line x1="15" y1="1" x2="15" y2="4"></line>
								<line x1="9" y1="20" x2="9" y2="23"></line>
								<line x1="15" y1="20" x2="15" y2="23"></line>
								<line x1="20" y1="9" x2="23" y2="9"></line>
								<line x1="20" y1="14" x2="23" y2="14"></line>
								<line x1="1" y1="9" x2="4" y2="9"></line>
								<line x1="1" y1="14" x2="4" y2="14"></line>
							</svg>
						</NavLink>
					</li>

					<li>
						<NavLink to={routes.chat} className={navLinkStyle}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-message-circle"
							>
								<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
							</svg>
						</NavLink>
					</li>
				</ul>

				<ul className="bottom-icon-side-menu">
					<li>
						<a href="" className="right-panel-trigger">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-search"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
							</svg>
						</a>
					</li>

					<li>
						<a href="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-settings"
							>
								<circle cx="12" cy="12" r="3"></circle>
								<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
