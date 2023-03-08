import React from 'react';

export const InputAddons = ({
	left,
	right,
	placeholder,
	value,
	onChange,
	label,
	type,
	...rest
}) => {
	return (
		<div className="field has-addons">
			{left && (
				<div className="control">
					<a className="button is-static">{left}</a>
				</div>
			)}

			<div className="control is-expanded">
				<input
					className="input"
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					{...rest}
				/>
			</div>

			{right && (
				<div className="control">
					<a className="button">{right}</a>
				</div>
			)}
		</div>
	);
};
