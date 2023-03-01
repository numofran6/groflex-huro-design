import React, { useContext, useEffect, useState } from 'react';
import { sidebarToggleContext } from '../../context/sidebarToggle';
import feather from 'feather-icons';
import { Link } from 'react-router-dom';

export const SidebarPanel = () => {
	const { active, handleActive } = useContext(sidebarToggleContext);
	const [menu1Open, setMenu1Open] = useState(false);
	const [menu2Open, setMenu2Open] = useState(false);

	const handleMenu1Click = () => {
		setMenu1Open(!menu1Open);
		setMenu2Open(false);
	};

	const handleMenu2Click = () => {
		setMenu1Open(false);
		setMenu2Open(!menu2Open);
	};

	useEffect(() => {
		feather.replace();
	}, []);

	return (
		<div className={`sidebar-panel is-generic ${active ? 'is-active' : ''}`}>
			<div className="subpanel-header">
				<div className="dropdown project-dropdown dropdown-trigger is-spaced">
					<div className="h-avatar is-small">
						<span className="avatar is-fake is-h-green">
							<span>H</span>
						</span>
					</div>
					<span className="status-indicator"></span>
				</div>
				<h3 className="no-mb">Dashboard</h3>
				<div className="panel-close">
					<p onClick={handleActive}>Close</p>
				</div>
			</div>

			<div className="inner">
				<div className="simplebar-wrapper">
					<div className="simplebar-height-auto-observer-wrapper">
						<div className="simplebar-height-auto-observer"></div>
					</div>

					<div className="simplebar-mask">
						<div className="simplebar-offset">
							<div className="simplebar-content-wrapper">
								<div className="simplebar-content">
									<ul>
										<li>
											<a href="">Link 1</a>
										</li>

										<li
											className={`has-children ${menu1Open ? 'active' : ''}`}
											onClick={handleMenu1Click}
										>
											<div className="collapse-wrap">
												<Link to={'#'} className="parent-link">
													Link 2<i data-feather="chevron-right"></i>
												</Link>
											</div>

											<ul
												style={{
													display: menu1Open ? 'block' : 'none',
												}}
											>
												<li>
													<a className="is-submenu" href="#">
														<i data-feather="circle"></i>
														Link 1
													</a>
												</li>

												<li className="is-active">
													<a className="is-submenu" href="#">
														<i data-feather="circle"></i>
														Link 2
													</a>
												</li>

												<li>
													<a className="is-submenu" href="#">
														<i data-feather="circle"></i>
														Link 3
													</a>
												</li>

												<li>
													<a className="is-submenu" href="#">
														<i data-feather="circle"></i>
														Link 4
													</a>
												</li>
											</ul>
										</li>

										<li
											className={`has-children ${menu2Open ? 'active' : ''}`}
											onClick={handleMenu2Click}
										>
											<div className="collapse-wrap">
												<Link to={'#'} className="parent-link">
													Link 3<i data-feather="chevron-right"></i>
												</Link>
											</div>

											<ul
												style={{
													display: menu2Open ? 'block' : 'none',
												}}
											>
												<li>
													<a className="is-submenu" href="#">
														<i data-feather="circle"></i>
														Link 1
													</a>
												</li>

												<li className="is-active">
													<a className="is-submenu" href="#">
														<i data-feather="circle"></i>
														Link 2
													</a>
												</li>

												<li>
													<a className="is-submenu" href="#">
														<i data-feather="circle"></i>
														Link 3
													</a>
												</li>

												<li>
													<a className="is-submenu" href="#">
														<i data-feather="circle"></i>
														Link 4
													</a>
												</li>
											</ul>
										</li>

										<li>
											<a href="">Link </a>
										</li>
										<li>
											<a href="">Link </a>
										</li>
										<li>
											<a href="">Link </a>
										</li>
										<li>
											<a href="">Link </a>
										</li>
										<li>
											<a href="">Link </a>
										</li>
										<li>
											<a href="">Link </a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
										<li>
											<a href="">Link</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div
					className="simplebar-track simplebar-horizontal"
					style={{ visibility: 'hidden' }}
				>
					<div
						className="simplebar-scrollbar"
						style={{ width: '0px', display: 'none' }}
					></div>
				</div>

				<div
					className="simplebar-track simplebar-vertical"
					style={{ visibility: 'visible' }}
				>
					<div
						className="simplebar-scrollbar"
						style={{
							height: '645px',
							display: 'block',
							transform: 'translate3d(0px, 6px, 0px)',
						}}
					></div>
				</div> */}
			</div>
		</div>
	);
};
