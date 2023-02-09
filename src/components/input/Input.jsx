import React from 'react';

// interface styles {width: string, height: string}

export const Input = ({
	placeholder,
	focus,
	helpText,
	isRounded,
	hasIcon,
	isLoading,
	hasValidation,
	hasSuccess,
	hasError,
	...rest
}) => {
	const getFocusType = () => {
		if (focus === 'primary') {
			return 'is-primary-focus';
		}

		if (focus === 'success') {
			return 'is-success-focus';
		}

		if (focus === 'info') {
			return 'is-info-focus';
		}

		if (focus === 'warning') {
			return 'is-warning-focus';
		}

		if (focus === 'danger') {
			return 'is-danger-focus';
		}
	};

	const getInputClassOptions = () => {
		if (isRounded) {
			return 'is-rounded';
		} else {
			return '';
		}
	};

	const getControlCalssOptions = () => {
		const classes = [];

		if (hasIcon) {
			classes.push('has-icon');
		}

		if (isLoading) {
			classes.push('is-loading');
		}

		if (hasValidation && hasSuccess) {
			classes.push('has-validation has-success');
		}

		if (hasValidation && hasError) {
			classes.push('has-validation has-error');
		}

		return classes.join(' ');
	};

	return (
		<div className="field">
			<div className={`control ${getControlCalssOptions()}`}>
				<input
					type="text"
					className={`input ${getFocusType()} ${getInputClassOptions()}`}
					placeholder={placeholder}
					{...rest}
				/>

				{/* Icon */}
				{hasIcon && (
					<div className="form-icon">
						<i className="fab fa-twitter">
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
					</div>
				)}

				{/* Validation Success */}
				{hasValidation && hasSuccess && (
					<div className="validation-icon is-success">
						<i data-feather="check"></i>
					</div>
				)}

				{/* Validation Error */}
				{hasValidation && hasSuccess && (
					<div className="validation-icon is-error">
						<i data-feather="x"></i>
					</div>
				)}

				{/* Helper text */}
				{helpText && (
					<p
						className={`help ${
							hasSuccess ? 'success-text' : hasError ? 'danger-text' : ''
						}`}
					>
						{helpText}
					</p>
				)}
			</div>
		</div>
	);
};

/**
 * basic input
 * help text
 * rounded
 * focus colors
 * font awesome !!!icon not showing: fab fa-twitter
 * line icons !!!not showing: lnil lnil-briefcase
 * feather icons !!!not showing: data-feather="github"
 * loading input
 * Disabled Input
 * Validation !!!iconst not showing
 */

{
	/* <Input
				placeholder="Search..."
				focus="info"
				helpText="Username is incorrect"
				hasIcon
			/> */
}
