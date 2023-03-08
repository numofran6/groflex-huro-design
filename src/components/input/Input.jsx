import React, { useEffect } from 'react';
import feather from 'feather-icons';

export const Input = ({
	placeholder,
	focusType,
	helpText,
	isRounded,
	hasIcon,
	isLoading,
	isSuccess,
	isError,
	icon,
	validationIcon,
	value,
	onChange,
	label,
	type,
	...rest
}) => {
	useEffect(() => {
		feather.replace();
	}, []);

	const getFocusType = () => {
		switch (focusType) {
			case 'primary':
				return 'is-primary-focus';
			case 'success':
				return 'is-success-focus';
			case 'info':
				return 'is-info-focus';
			case 'warning':
				return 'is-warning-focus';
			case 'danger':
				return 'is-danger-focus';
			default: {
				return '';
			}
		}
	};

	const getInputClassOptions = () => {
		if (isRounded) {
			return 'is-rounded';
		} else {
			return '';
		}
	};

	const getControlClassOptions = () => {
		const classes = [];

		hasIcon && classes.push('has-icon');

		isLoading && classes.push('is-loading');

		validationIcon && isSuccess && classes.push('has-validation has-success');

		validationIcon && isError && classes.push('has-validation has-error');

		return classes.join(' ');
	};

	return (
		<div className="field">
			{label && <label>{label}</label>}

			<div className={`control ${getControlClassOptions()}`}>
				<input
					type={type}
					className={`input ${getFocusType()} ${getInputClassOptions()}`}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					{...rest}
				/>

				{/* Icon */}
				{hasIcon && <span className="form-icon">{icon}</span>}

				{/* Validation Success */}
				{validationIcon && isSuccess && (
					<div className="validation-icon is-success">{validationIcon}</div>
				)}

				{/* Validation Error */}
				{validationIcon && isError && (
					<div className="validation-icon is-error">{validationIcon}</div>
				)}

				{/* Helper text */}
				{helpText && (
					<p
						className={`help ${
							isSuccess ? 'success-text' : isError ? 'danger-text' : ''
						}`}
					>
						{helpText}
					</p>
				)}
			</div>
		</div>
	);
};
