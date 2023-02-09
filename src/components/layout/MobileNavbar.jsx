import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { sidebarToggleContext } from '../../context/sidebarToggle';
import logo from '../../assets/img/logos/logo/logo.svg';
import logoLight from '../../assets/img/logos/logo/logo-light.svg';

export const MobileNavbar = () => {
	const { active, handleActive } = useContext(sidebarToggleContext);

	return (
		<nav className="navbar mobile-navbar no-shadow is-hidden-desktop is-hidden-tablet">
			<div className="container">
				<div className="navbar-brand">
					<div className="brand-start">
						<div
							className={`navbar-burger ${active ? 'is-active' : ''}`}
							onClick={handleActive}
						>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>

					<Link className="navbar-item is-brand" to={'/'}>
						<img className="light-image" src={logo} />
						<img className="dark-image" src={logoLight} />
					</Link>

					<div className="brand-end">
						<div className="navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop">
							<Link className="navbar-link is-arrowless" to={'/'}>
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
									className="feather feather-bell"
								>
									<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
									<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
								</svg>
								<span className="new-indicator pulsate"></span>
							</Link>
						</div>

						<div className="dropdown is-right is-spaced dropdown-trigger user-dropdown">
							<div className="is-trigger">
								<div className="profile-avatar">
									<img
										className="avatar"
										src="https://via.placeholder.com/150x150"
										data-demo-src="assets/img/avatars/photos/8.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
