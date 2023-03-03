import React from 'react';

export const InputAddons = ({
	leftValue,
	rightValue,
	placeholder,
	value,
	onChange,
	...rest
}) => {
	return (
		<div className="field has-addons">
			{leftValue && (
				<div className="control">
					<a className="button is-static">{leftValue}</a>
				</div>
			)}

			<div className="control is-expanded">
				<input
					className="input"
					type="text"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					{...rest}
				/>
			</div>

			{rightValue && (
				<div className="control">
					<a className="button">{rightValue}</a>
				</div>
			)}
		</div>
	);
};
