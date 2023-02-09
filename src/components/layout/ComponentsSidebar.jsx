import React, { useContext } from 'react';
import { sidebarToggleContext } from '../../context/sidebarToggle';

export const ComponentsSidebar = () => {
	const { active, handleActive } = useContext(sidebarToggleContext);

	return (
		<div className={`sidebar-panel is-generic ${active ? 'is-active' : ''}`}>
			<div className="subpanel-header">
				<h3 className="no-mb">Components</h3>
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
