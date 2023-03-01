import { useContext, useEffect } from 'react';
import { sidebarToggleContext } from '../../context/sidebarToggle';
import flag from '../../assets/img/icons/flags/united-states-of-america.svg';
import feather from 'feather-icons';

export const PageContent = () => {
	const { active, handleActive } = useContext(sidebarToggleContext);

	useEffect(() => {
		feather.replace();
	}, []);

	return (
		<div className={`view-wrapper ${active ? 'is-pushed-full' : ''}`}>
			<div className="page-content-wrapper">
				<div className="page-content is-relative">
					{/* Page Title */}
					<div className="page-title has-text-centered">
						{/* Sidebar Trigger */}
						<div className="huro-hamburger nav-trigger push-resize">
							<span className="menu-toggle has-chevron">
								<span
									className={`icon-box-toggle ${active ? 'active' : ''}`}
									onClick={handleActive}
								>
									<span className="rotate">
										<i className="icon-line-top"></i>
										<i className="icon-line-center"></i>
										<i className="icon-line-bottom"></i>
									</span>
								</span>
							</span>
						</div>

						{/* Title */}
						<div className="title-wrap">
							<h1 className="title is-4">Layout Template</h1>
						</div>

						{/* Menu */}
						<div className="toolbar ml-auto">
							<div className="toolbar-link">
								<label className="dark-mode ml-auto">
									<input type="checkbox" />
									<span></span>
								</label>
							</div>

							<a href="" className="toolbar-link right-panel-trigger">
								<img src={flag} alt=""></img>
							</a>

							<div className="toolbar-notifications is-hidden-mobile">
								<div className="dropdown is-spaced is-dots is-right dropdown-trigger">
									<div className="is-trigger">
										<i data-feather="bell"></i>
										<span className="new-indicator pulsate"></span>
									</div>
								</div>
							</div>

							<a className="toolbar-link right-panel-trigger">
								<i data-feather="grid"></i>
							</a>
						</div>
					</div>

					{/* Page Content */}
					<div className="page-content-inner">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
							natus debitis reprehenderit tempore expedita quasi id explicabo
							placeat, voluptate perspiciatis saepe corrupti qui in ipsam facere
							totam. Sint, porro! Deserunt?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
