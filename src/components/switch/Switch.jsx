import React from 'react';

export const Switch = ({
	label,
	isPrimary,
	isSuccess,
	isInfo,
	isWarning,
	isDanger,
	rest,
}) => {
	const getSwitchClasses = () => {
		const classes = [];

		isPrimary && classes.push('is-primary');
		isSuccess && classes.push('is-success');
		isInfo && classes.push('is-info');
		isWarning && classes.push('is-warning');
		isDanger && classes.push('is-danger');

		return classes.join(' ');
	};

	return (
		<div className={label ? 'switch-block' : ''}>
			<label class={`form-switch ${getSwitchClasses()}`}>
				<input type="checkbox" class="is-switch" {...rest} />
				<i></i>
			</label>

			<div class="text">
				<span>{label}</span>
			</div>
		</div>
	);
};
