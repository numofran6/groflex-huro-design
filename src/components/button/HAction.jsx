import React from 'react';

export const HAction = ({ children, isRounded, isHover, isGrey }) => {
	const getActionClasses = () => {
		const classes = [];

		isRounded && classes.push('is-rounded');

		isHover && classes.push('is-hoverable');

		isGrey && classes.push('is-grey');

		return classes.join(' ');
	};

	return (
		<>
			<button className={`button h-action ${getActionClasses()}`}>
				{children}
			</button>
		</>
	);
};
