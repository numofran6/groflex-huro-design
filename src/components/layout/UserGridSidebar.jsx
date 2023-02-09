import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { sidebarToggleContext } from '../../context/sidebarToggle';

export const UserGridSidebar = () => {
	const { active, handleActive } = useContext(sidebarToggleContext);

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
				<h3 className="no-mb">User Grid</h3>
				<div className="panel-close">
					<p onClick={handleActive}>Close</p>
				</div>
			</div>

			<div className="inner">
				<div className="simplebar-wrapper" style={{ margin: '0px' }}>
					<div className="simplebar-height-auto-observer-wrapper">
						<div className="simplebar-height-auto-observer"></div>
					</div>

					<div className="simplebar-mask">
						<div
							className="simplebar-offset"
							style={{ right: '0px', bottom: '0px' }}
						>
							<div
								className="simplebar-content-wrapper"
								style={{ height: '100%', overflow: 'hidden ' }}
							>
								<div className="simplebar-content" style={{ padding: '0px' }}>
									<ul>
										<li className="has-children">
											<div className="collapse-wrap">
												<a href="" className="parent-link">
													Lorem
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
														className="feather feather-chevron-right"
													>
														<polyline points="9 18 15 12 9 6"></polyline>
													</svg>
												</a>
											</div>
										</li>

										<li className="has-children">
											<div className="collapse-wrap">
												<a href="" className="parent-link">
													Lorem
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
														className="feather feather-chevron-right"
													>
														<polyline points="9 18 15 12 9 6"></polyline>
													</svg>
												</a>
											</div>
										</li>

										<li className="has-children">
											<div className="collapse-wrap">
												<a href="" className="parent-link">
													Lorem
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
														className="feather feather-chevron-right"
													>
														<polyline points="9 18 15 12 9 6"></polyline>
													</svg>
												</a>
											</div>
										</li>

										<li
											className={
												window.location.pathname === '/more-on-lorem'
													? 'is-active'
													: ''
											}
										>
											<Link to={'/more-on-lorem'}>More on Lorem</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
