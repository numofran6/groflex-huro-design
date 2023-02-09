import React from 'react';

export const HAction = ({ children, isRounded, isHover, isGrey }) => {
	const getActionClasses = () => {
		const classes = [];

		if (isRounded) {
			classes.push('is-rounded');
		}

		if (isHover) {
			classes.push('is-hoverable');
		}

		if (isGrey) {
			classes.push('is-grey');
		}

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
