import React from 'react';

export const DropdownMenu = () => {
	return (
		<div className="dropdown-menu">
			<div className="dropdown-content">
				{/* Head */}
				<div className="dropdown-head">
					<div className="h-avatar"></div>
					<div
						className="meta"
						style={{ display: 'flex', justifyContent: 'center', flex: 1 }}
					>
						<span></span>
						<span className="">GROFLEX SOLUTIONS</span>
					</div>
				</div>

				{/* Content */}
				<a href="#" className="dropdown-item is-media">
					<div className="icon">
						<i className="fas fa-question"></i>
					</div>
					<div className="meta">
						<span className="is-weight-300">Account Details</span>
					</div>
				</a>
				<a href="#" className="dropdown-item is-media">
					<div className="icon">
						<i className="fas fa-question"></i>
					</div>
					<div className="meta">
						<span className="is-weight-300">Teams</span>
					</div>
				</a>

				<hr className="dropdown-divider" />

				<a href="#" className="dropdown-item is-media">
					<div className="icon">
						<i className="fas fa-question"></i>
					</div>
					<div className="meta">
						<span className="is-weight-300">Help</span>
					</div>
				</a>
				<a href="#" className="dropdown-item is-media">
					<div className="icon">
						<i className="fas fa-sticky-note"></i>
					</div>
					<div className="meta">
						<span className="is-weight-300">Privacy Policy</span>
					</div>
				</a>

				<hr className="dropdown-divider" />

				<a href="#" className="dropdown-item is-media">
					<div className="icon">
						<i className="fas fa-sign-in-alt"></i>
					</div>
					<div className="meta">
						<span className="is-weight-300">Logout</span>
					</div>
				</a>
			</div>
		</div>
	);
};
