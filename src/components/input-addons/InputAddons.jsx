import React from 'react';

export const InputAddons = ({ left, right, placeholder }) => {
	return (
		<div className="field has-addons">
			{left && (
				<div className="control">
					<a className="button is-static">+91</a>
				</div>
			)}

			<div className="control is-expanded">
				<input className="input" type="text" placeholder={placeholder} />
			</div>

			{right && (
				<div class="control">
					<a class="button">{right}</a>
				</div>
			)}
		</div>
	);
};
