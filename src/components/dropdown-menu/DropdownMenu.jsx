import React from 'react';
import { useEffect } from 'react';
import feather from 'feather-icons';

export const DropdownMenu = () => {
	useEffect(() => {
		feather.replace();
	}, []);

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
						<i data-feather="help-circle"></i>
					</div>
					<div className="meta">
						<span className="is-weight-300">Account Details</span>
					</div>
				</a>
				<a href="#" className="dropdown-item is-media">
					<div className="icon">
						<i data-feather="help-circle"></i>
					</div>
					<div className="meta">
						<span className="is-weight-300">Teams</span>
					</div>
				</a>

				<hr className="dropdown-divider" />

				<a href="#" className="dropdown-item is-media">
					<div className="icon">
						<i data-feather="help-circle"></i>
					</div>
					<div className="meta">
						<span className="is-weight-300">Help</span>
					</div>
				</a>
				<a href="#" className="dropdown-item is-media">
					<div className="icon">
						<i data-feather="clipboard"></i>

						{/* <i class="lnil lnil-alarm"></i> */}
						{/* <i class="lni lni-alarm"></i> */}
					</div>
					<div className="meta">
						<span className="is-weight-300">Privacy Policy</span>
					</div>
				</a>

				<hr className="dropdown-divider" />

				<a href="#" className="dropdown-item is-media">
					<div className="icon">
						<i data-feather="log-out"></i>
					</div>
					<div className="meta">
						<span className="is-weight-300">Logout</span>
					</div>
				</a>
			</div>
		</div>
	);
};
