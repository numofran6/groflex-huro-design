import React from 'react';

export const InputAddons = () => {
	return (
		<div class="field has-addons">
			<div className="control">
				<a className="button is-static">+91</a>
			</div>
			<div className="control is-expanded">
				<input className="input" type="text" placeholder="Your phone number" />
			</div>
		</div>
	);
};
