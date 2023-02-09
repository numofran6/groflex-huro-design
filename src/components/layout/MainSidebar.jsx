import React, { useContext } from 'react';
import { sidebarToggleContext } from '../../context/sidebarToggle';
import logo from '../../assets/img/logos/logo/logo.svg';
import logoLight from '../../assets/img/logos/logo/logo-light.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const MainSidebar = () => {
	const { active } = useContext(sidebarToggleContext);
	const [naver, setNaver] = useState(window.location.pathname);

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

	const naverHandler = () => {
		if (naver === routes.home) {
			return { marginTop: '150px' };
		}
		if (
			naver === routes.userGrid ||
			window.location.pathname === '/more-on-lorem'
		) {
			return { marginTop: '214px' };
		}
		if (naver === routes.elements) {
			return { marginTop: '278px' };
		}
		if (naver === routes.components) {
			return { marginTop: '342px' };
		}
		if (naver === routes.chat) {
			return { marginTop: '406px' };
		}
	};

	return (
		<div className={`main-sidebar ${active ? 'is-bordered' : ''}`}>
			<div className={`sidebar-brand ${active ? 'is-bordered' : ''}`}>
				<a href="/">
					<img className="light-image" src={logo} alt="" />
					<img className="dark-image" src={logoLight} alt="" />
				</a>
			</div>

			<div className="sidebar-inner">
				<div className="naver" style={naverHandler()}></div>

				<ul className="icon-menu">
					{/* Activity */}
					<li>
						<NavLink
							to={routes.home}
							onClick={() => setNaver(routes.home)}
							className={navLinkStyle}
						>
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
								className="feather feather-activity sidebar-svg"
							>
								<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
							</svg>
						</NavLink>
					</li>

					{/* Layouts */}
					<li>
						<NavLink
							to={routes.userGrid}
							onClick={() => setNaver(routes.userGrid)}
							className={userGridLinkStyle}
						>
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
								className="feather feather-grid sidebar-svg"
							>
								<rect x="3" y="3" width="7" height="7"></rect>
								<rect x="14" y="3" width="7" height="7"></rect>
								<rect x="14" y="14" width="7" height="7"></rect>
								<rect x="3" y="14" width="7" height="7"></rect>
							</svg>
						</NavLink>
					</li>

					{/* Bounties */}
					<li>
						<NavLink
							to={routes.elements}
							onClick={() => setNaver(routes.elements)}
							className={navLinkStyle}
						>
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
								className="feather feather-box sidebar-svg"
							>
								<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
								<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
								<line x1="12" y1="22.08" x2="12" y2="12"></line>
							</svg>
						</NavLink>
					</li>

					{/* Bugs */}
					<li>
						<NavLink
							to={routes.components}
							onClick={() => setNaver(routes.components)}
							className={navLinkStyle}
						>
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
								className="feather feather-cpu sidebar-svg"
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

					{/* Messaging */}
					<li>
						<NavLink
							to={routes.chat}
							onClick={() => setNaver(routes.chat)}
							className={navLinkStyle}
						>
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
								className="feather feather-message-circle sidebar-svg"
							>
								<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
							</svg>
						</NavLink>
					</li>
				</ul>

				<ul className="bottom-menu">
					<li className="right-panel-trigger">
						<NavLink to={'/dummy'} className={navLinkStyle}>
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
								className="feather feather-search sidebar-svg"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
							</svg>
						</NavLink>

						<NavLink to={'/dummy'} className="is-hidden is-inactive">
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
								className="feather feather-x sidebar-svg"
							>
								<line x1="18" y1="6" x2="6" y2="18"></line>
								<line x1="6" y1="6" x2="18" y2="18"></line>
							</svg>
						</NavLink>
					</li>

					<li>
						<NavLink to={'/dummy'} className={navLinkStyle}>
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
								className="feather feather-settings sidebar-svg"
							>
								<circle cx="12" cy="12" r="3"></circle>
								<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
							</svg>
						</NavLink>
					</li>

					<li>
						<div className="dropdown profile-dropdown dropdown-trigger is-spaced is-up">
							<img
								src="https://via.placeholder.com/150x150"
								data-demo-src="assets/img/avatars/photos/8.jpg"
								alt=""
							/>
							<span className="status-indicator"></span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
