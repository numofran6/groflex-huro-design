import React from 'react';

export const IconButton = ({
	children,
	isBold,
	isPrimary,
	isSuccess,
	isInfo,
	isWarning,
	isDanger,
	textLower,
	isBig,
	isHuge,
	isCircle,
	isRounded,
	isLight,
	isOutlined,
	isLoading,
	elevated,
	raised,
	icon,
	iconSmall,
	...rest
}) => {
	const getButtonClasses = () => {
		const classes = [];

		if (isCircle) {
			classes.push('is-circle');
		}

		if (isBold) {
			classes.push('is-bold');
		}

		if (isPrimary) {
			classes.push('is-primary');
		}

		if (isSuccess) {
			classes.push('is-success');
		}

		if (isInfo) {
			classes.push('is-info');
		}

		if (isWarning) {
			classes.push('is-warning');
		}

		if (isDanger) {
			classes.push('is-danger');
		}

		if (raised) {
			classes.push('is-raised');
		}

		if (elevated) {
			classes.push('is-elevated');
		}

		if (textLower) {
			classes.push('is-lower');
		}

		if (isBig) {
			classes.push('is-big');
		}

		if (isHuge) {
			classes.push('is-huge');
		}

		if (isRounded) {
			classes.push('is-rounded');
		}

		if (isLight) {
			classes.push('is-light');
		}

		if (isOutlined) {
			classes.push('is-outlined');
		}

		if (isLoading) {
			classes.push('is-loading');
		}

		return classes.join(' ');
	};

	return (
		<>
			<button {...rest} className={`button ${getButtonClasses()}`}>
				{icon && (
					<span className={`icon ${iconSmall && 'is-small'}`}>
						<i data-feather="twitter">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-twitter"
							>
								<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
							</svg>
						</i>
					</span>
				)}
			</button>
		</>
	);
};
